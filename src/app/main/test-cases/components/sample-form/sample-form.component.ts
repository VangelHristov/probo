import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { ValidationService } from '../../../../core/services/validation.service';

import { ApiResponseModel } from '../../../problems/models/api-response.model';
import { Sample } from '../../models/sample.model';
import { SampleDataService } from '../../services/sample-data.service';

@Component({
	selector: 'app-sample-form',
	templateUrl: './sample-form.component.html',
	styleUrls: ['./sample-form.component.scss']
})
export class SampleFormComponent implements OnInit {
	formGroup: FormGroup;

	@Input() sampleId: number;
	@Input() testCaseId: number;
	@Input() sample: Sample;

	@Output() sampleSaved: EventEmitter<number>;
	@Output() saveError: EventEmitter<ApiResponseModel>;

	constructor(private fb: FormBuilder, private validationService: ValidationService, private sampleDataService: SampleDataService) {
		this.sample = {};
		this.sampleSaved = new EventEmitter<number>();
		this.saveError = new EventEmitter<ApiResponseModel>();
	}

	ngOnInit(): void {
		this.buildForm();
	}

	submit(): void {
		this.validationService.formGroup(this.formGroup);

		this.sampleDataService
			.save(this.formGroup.value, this.sample.id)
			.pipe(take(1))
			.subscribe((res: ApiResponseModel) => this.sampleSaved.emit(res.id), (res: ApiResponseModel) => this.saveError.emit(res));
	}

	private buildForm(): void {
		this.formGroup = this.fb.group({
			outputValue: [this.sample.outputValue, Validators.required],
			testCaseId: [this.testCaseId]
		});
	}
}
