import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { take } from 'rxjs/operators';

import { ValidationService } from '../../../../core/services/validation.service';
import { ApiResponseModel } from '../../models/api-response.model';
import { Problem } from '../../models/problem.model';
import { ProblemDataService } from '../../services/problem-data.service';

@Component({
	selector: 'app-problem-form',
	templateUrl: './problem-form.component.html',
	styleUrls: ['./problem-form.component.scss']
})
export class ProblemFormComponent implements OnInit {
	formGroup: FormGroup;
	problem: Problem;
	showAddTestCasesButton: boolean;

	private readonly problemId: number;

	constructor(private fb: FormBuilder, private validationService: ValidationService, private notification: NzNotificationService, private problemDataService: ProblemDataService, private router: Router, route: ActivatedRoute, private modalService: NzModalService) {
		const problem = route.snapshot.data.problem;
		this.problem = !!problem ? problem : {};
		this.problemId = route.snapshot.params.id;
		this.showAddTestCasesButton = this.problemId > 0;
	}

	ngOnInit(): void {
		this.buildForm();
	}

	submitForm(problem: Problem): void {
		this.validationService.formGroup(this.formGroup);

		this.problemDataService
			.save(problem, this.problemId)
			.pipe(take(1))
			.subscribe(
				(res: ApiResponseModel) => {
					this.showAddTestCasesPrompt(res.id);
				},
				(res: { error: ApiResponseModel }) => {
					this.notification.create('error', res.error.title, res.error.detail);
				}
			);
	}

	navigateToAllProblems(): Promise<boolean> {
		return this.router.navigate(['main', 'problems', 'all']);
	}

	editTestCases(): void {
		this.router.navigate(['main', 'test-cases', this.problemId, 'list']);
	}

	private showAddTestCasesPrompt(problemId): void {
		this.modalService.confirm({
			nzTitle: '<i>Do you Want to add test cases?</i>',
			nzOkText: 'Yes',
			nzCancelText: 'No',
			nzOnOk: () => this.router.navigate(['main', 'test-cases', problemId, 'list']),
			nzOnCancel: () => this.navigateToAllProblems().then(() => this.notification.success('Success', 'Problems was saved.'))
		});
	}

	private buildForm(): void {
		this.formGroup = this.fb.group({
			title: [this.problem.title, [Validators.required, Validators.maxLength(255)]],
			description: [this.problem.description, [Validators.required, Validators.maxLength(255)]],
			published: [!!this.problem.published ? String(this.problem.published) : 'false']
		});
	}
}
