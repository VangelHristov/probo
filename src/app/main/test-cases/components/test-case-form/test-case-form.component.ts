import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ValidationService } from '../../../../core/services/validation.service';

import { ApiResponseModel } from '../../../problems/models/api-response.model';
import { TestCase } from '../../models/test-case.model';
import { TestCaseDataService } from '../../services/test-case-data.service';

@Component({
	selector: 'app-test-case-form',
	templateUrl: './test-case-form.component.html',
	styleUrls: ['./test-case-form.component.scss']
})
export class TestCaseFormComponent implements OnInit {
	formGroup: FormGroup;
	testCase: TestCase;

	@Output() testCaseSaved: EventEmitter<number>;
	@Output() saveError: EventEmitter<ApiResponseModel>;

	private readonly problemId: number;

	constructor(private fb: FormBuilder, route: ActivatedRoute, private testCaseDataService: TestCaseDataService, private validationService: ValidationService) {
		this.problemId = route.snapshot.params.problemId;
		this.testCase = !!route.snapshot.data.testCase ? route.snapshot.data.testCase : {};
		this.testCaseSaved = new EventEmitter<number>();
		this.saveError = new EventEmitter<ApiResponseModel>();
	}

	ngOnInit(): void {
		this.buildForm();
	}

	submit(): void {
		this.validationService.formGroup(this.formGroup);
		this.testCaseDataService
			.save(this.formGroup.value, this.testCase.id)
			.pipe(take(1))
			.subscribe(
				(res: ApiResponseModel) => {
					this.testCaseSaved.emit(res.id);
				},
				(res: ApiResponseModel) => this.saveError.emit(res)
			);
	}

	private buildForm(): void {
		this.formGroup = this.fb.group({
			description: [this.testCase.description, Validators.required],
			problemId: [this.problemId]
		});
	}
}
