import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NzNotificationService } from 'ng-zorro-antd';
import { take } from 'rxjs/operators';
import { ApiResponseModel } from '../../models/api-response.model';

import { Problem } from '../../models/problem.model';
import { ProblemDataService } from '../../services/problem-data.service';

@Component({
	selector: 'app-problem-list',
	templateUrl: './problem-list.component.html',
	styleUrls: ['./problem-list.component.scss']
})
export class ProblemListComponent implements OnInit {
	problems: Problem[];
	pageNumber: number;
	lastPage: boolean;

	constructor(private problemDataService: ProblemDataService, private notification: NzNotificationService, public sanitizer: DomSanitizer) {
		this.problems = [];
		this.pageNumber = 0;
		this.lastPage = false;
	}

	ngOnInit(): void {
		this.getProblems();
	}

	getProblems(): void {
		if (this.lastPage) {
			return;
		}

		this.problemDataService
			.getAll(this.pageNumber)
			.pipe(take(1))
			.subscribe(
				(res: { last: boolean; content: Problem[] }) => {
					this.problems.push(...res.content);
					this.pageNumber += 1;
					this.lastPage = res.last;
				},
				(res: { error: ApiResponseModel }) => this.notification.error(res.error.title, res.error.detail)
			);
	}
}
