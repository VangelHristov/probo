import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { TestCase } from '../../../test-cases/models/test-case.model';
import { TestCaseDataService } from '../../../test-cases/services/test-case-data.service';
import { Problem } from '../../models/problem.model';

@Component({
	selector: 'app-problem-details',
	templateUrl: './problem-details.component.html',
	styleUrls: ['./problem-details.component.scss']
})
export class ProblemDetailsComponent implements OnInit {
	problem: Problem;
	testCases: TestCase[];
	testCasesDetails: TestCase[];
	code: string;
	editorOptions: object;
	showResult: boolean;
	score: number;
	loading: boolean;

	constructor(private route: ActivatedRoute, private testCaseDataService: TestCaseDataService, public sanitizer: DomSanitizer) {
		this.problem = this.route.snapshot.data.problem;
		this.testCases = this.route.snapshot.data.testCases;
		this.testCasesDetails = [];
		this.code = '';
		this.editorOptions = { theme: 'vs-dark', language: 'javascript', validate: true };
		this.showResult = false;
		this.loading = false;
	}

	ngOnInit(): void {
		this.code = this.getCode();
		this.testCases.forEach(tc => {
			this.testCaseDataService.getTestCaseDetails(tc.id).subscribe(data => {
				this.testCasesDetails.push(data);
				this.code = this.getCode();
			});
		});
	}

	submit(): void {
		this.score = Math.ceil(Math.random() * 100);
		this.loading = true;

		const timeout = setTimeout(() => {
			this.loading = false;
			this.showResult = true;
			clearTimeout(timeout);
		}, 500);
	}

	reset(): void {
		this.code = this.getCode();
		this.showResult = false;
	}

	private getCode(): string {
		if (this.testCasesDetails.length === 0) {
			return 'function solve(){\n\n}';
		}

		let code = 'function ';
		code += this.testCasesDetails[0].function.name;
		code += ' ( ';
		if (this.testCasesDetails[0].parameters.length > 0) {
			const len = this.testCasesDetails[0].parameters.length;
			this.testCasesDetails[0].parameters.forEach((x, i) => {
				if (i === len - 1) {
					code += x.name;
					return;
				}

				code += `${x.name}, `;
			});

			code += ' ) {\n\n}';
		}

		return code;
	}
}
