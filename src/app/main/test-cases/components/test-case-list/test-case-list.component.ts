import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { take } from 'rxjs/operators';

import { ApiResponseModel } from '../../../problems/models/api-response.model';
import { TestCase } from '../../models/test-case.model';
import { TestCaseDataService } from '../../services/test-case-data.service';

@Component({
	selector: 'app-test-case-list',
	templateUrl: './test-case-list.component.html',
	styleUrls: ['./test-case-list.component.scss']
})
export class TestCaseListComponent {
	testCases: TestCase[];
	problemId: number;

	constructor(route: ActivatedRoute, private testCaseDataService: TestCaseDataService, private notification: NzNotificationService, private modalService: NzModalService) {
		this.testCases = route.snapshot.data.testCases;
		this.problemId = route.snapshot.params.id;
	}

	showDeleteConfirm(id: number): void {
		this.modalService.confirm({
			nzTitle: 'Are you sure you want to delete this test case?',
			nzOkText: 'Yes',
			nzOkType: 'danger',
			nzOnOk: () => this.deleteTestCase(id),
			nzCancelText: 'No'
		});
	}

	private deleteTestCase(id: number): void {
		this.testCaseDataService
			.delete(id)
			.pipe(take(1))
			.subscribe(
				(res: ApiResponseModel) => {
					this.testCases = this.testCases.filter(tc => tc.id !== id);
					this.notification.success('Success', 'Test case was deleted.');
				},
				res => this.notification.create('error', res.title, res.detail)
			);
	}
}
