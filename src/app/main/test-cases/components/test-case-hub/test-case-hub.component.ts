import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

import { ApiResponseModel } from '../../../problems/models/api-response.model';
import { TestCase } from '../../models/test-case.model';

@Component({
	selector: 'app-test-case-hub',
	templateUrl: './test-case-hub.component.html',
	styleUrls: ['./test-case-hub.component.scss']
})
export class TestCaseHubComponent implements OnInit {
	stepIndex: number;
	totalSteps: number;
	testCaseId: number;
	sampleId: number;
	functionId: number;
	problemId: number;
	testCase: TestCase;

	constructor(private notification: NzNotificationService, private router: Router, private route: ActivatedRoute) {
		this.stepIndex = 0;
		this.totalSteps = 4;
		this.problemId = route.snapshot.params.problemId;
		this.testCase = {
			sample: {},
			parameters: [],
			function: {}
		};
	}

	ngOnInit(): void {
		this.route.data.subscribe(data => {
			if (data.testCase !== undefined) {
				this.testCase = data.testCase;
			}
		});
	}

	onTestCaseSaved(testCaseId: number): void {
		this.testCaseId = testCaseId;
		this.next();
	}

	onSampleSaved(sampleId: number): void {
		this.sampleId = sampleId;
		this.next();
	}

	onFunctionSaved(functionId: number): void {
		this.functionId = functionId;
		this.next();
	}

	onDone(): void {
		this.router.navigate(['main', 'test-cases', this.problemId, 'list']).then(() => this.notification.success('Success', 'Test case saved'));
	}

	onError(res: { error: ApiResponseModel }): void {
		this.notification.error(res.error.title, res.error.detail);
	}

	private next(): void {
		this.stepIndex += 1;
	}
}
