import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ValidationService } from '../../../../core/services/validation.service';
import { ApiResponseModel } from '../../../problems/models/api-response.model';

import { Parameter } from '../../models/parameter.model';
import { ParameterDataService } from '../../services/parameter-data.service';

@Component({
	selector: 'app-parameter-form',
	templateUrl: './parameter-form.component.html',
	styleUrls: ['./parameter-form.component.scss']
})
export class ParameterFormComponent implements OnInit, OnDestroy {
	formGroup: FormGroup;
	formValidityChange: Subscription;

	@Input() parameter: Parameter;
	@Input() sampleId: number;
	@Input() functionId: number;
	@Input() submitForm: Subject<boolean>;

	@Output() parameterSaved: EventEmitter<number>;
	@Output() saveError: EventEmitter<ApiResponseModel>;
	@Output() formInvalid: EventEmitter<boolean>;

	constructor(private fb: FormBuilder, private parameterDataService: ParameterDataService, private validationService: ValidationService) {
		this.parameter = {};
		this.parameterSaved = new EventEmitter<number>();
		this.saveError = new EventEmitter<ApiResponseModel>();
		this.formInvalid = new EventEmitter<boolean>();
	}

	ngOnInit(): void {
		this.buildForm();
		this.submitForm.pipe(take(1)).subscribe(() => this.submit());
	}

	ngOnDestroy(): void {
		this.formValidityChange.unsubscribe();
	}

	submit(): void {
		this.validationService.formGroup(this.formGroup);
		if (this.formGroup.invalid) {
			return;
		}

		this.parameterDataService
			.save(this.formGroup.value, this.parameter.id)
			.pipe(take(1))
			.subscribe((res: ApiResponseModel) => this.parameterSaved.emit(res.id), (res: ApiResponseModel) => this.saveError.emit(res));
	}

	private buildForm(): void {
		this.formGroup = this.fb.group({
			name: [this.parameter.name, Validators.required],
			value: [this.parameter.value, Validators.required],
			type: [this.parameter.type, Validators.required],
			fieldId: [this.parameter.fieldId, Validators.required],
			functionId: [this.functionId],
			sampleId: [this.sampleId]
		});

		this.formValidityChange = this.formGroup.statusChanges.subscribe(status => {
			if (status === 'VALID') {
				this.formInvalid.emit(false);
			} else {
				this.formInvalid.emit(true);
			}
		});
	}
}
