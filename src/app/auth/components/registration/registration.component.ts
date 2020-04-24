import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';
import { take } from 'rxjs/operators';

import { ValidationService } from '../../../core/services/validation.service';
import { AuthResponseModel } from '../../models/auth-response.model';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
	formGroup: FormGroup;

	constructor(private fb: FormBuilder, private validationService: ValidationService, private authService: AuthService, private notification: NzNotificationService, private router: Router) {}

	ngOnInit(): void {
		this.buildForm();
	}

	submitForm(): void {
		this.validationService.formGroup(this.formGroup);
		this.authService
			.register(this.formGroup.value)
			.pipe(take(1))
			.subscribe(
				() =>
					this.router.navigate(['user', 'login']).then(() => {
						this.notification.success('Success', 'You are registered.');
						this.notification.info('Info', 'Please log in.');
					}),
				(res: { error: AuthResponseModel }) => this.notification.create('error', res.error.title, res.error.detail)
			);
	}

	private buildForm(): void {
		this.formGroup = this.fb.group({
			email: [null, [Validators.email, Validators.required]],
			password: [null, [Validators.required]],
			firstName: [null, [Validators.required]],
			lastName: [null, [Validators.required]]
		});
	}
}
