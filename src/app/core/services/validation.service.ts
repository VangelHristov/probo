import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class ValidationService {
	formGroup(formGroup: FormGroup): void {
		Object.keys(formGroup.controls).forEach(c => {
			formGroup.controls[c].markAsDirty();
			formGroup.controls[c].updateValueAndValidity();
		});
	}
}
