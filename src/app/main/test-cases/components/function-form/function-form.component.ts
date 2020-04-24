import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';

import { ValidationService } from '../../../../core/services/validation.service';
import { ApiResponseModel } from '../../../problems/models/api-response.model';
import { FunctionModel } from '../../models/function.model';
import { FunctionDataService } from '../../services/function-data.service';

@Component({
	selector: 'app-function-form',
	templateUrl: './function-form.component.html',
	styleUrls: ['./function-form.component.scss']
})
export class FunctionFormComponent implements OnInit {
	formGroup: FormGroup;

	@Input() function: FunctionModel;

	@Output() functionSaved: EventEmitter<number>;
	@Output() saveError: EventEmitter<ApiResponseModel>;

	constructor(private fb: FormBuilder, private validationService: ValidationService, private functionDataService: FunctionDataService) {
		this.function = {};
		this.functionSaved = new EventEmitter<number>();
		this.saveError = new EventEmitter<ApiResponseModel>();
	}

	ngOnInit(): void {
		this.buildForm();
	}

	submit(): void {
		this.validationService.formGroup(this.formGroup);
		this.functionDataService
			.save(this.formGroup.value, this.function.id)
			.pipe(take(1))
			.subscribe((res: ApiResponseModel) => this.functionSaved.emit(res.id), (res: ApiResponseModel) => this.saveError.emit(res));
	}

	private buildForm(): void {
		this.formGroup = this.fb.group({
			returnType: [this.function.returnType, Validators.required],
			name: [this.function.name, Validators.required]
		});
	}
}
