import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';
import { take } from 'rxjs/operators';
import { ValidationService } from '../../../core/services/validation.service';
import { AuthResponseModel } from '../../models/auth-response.model';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	providers: [ValidationService]
})
export class LoginComponent implements OnInit {
	formGroup: FormGroup;

	private redirectUrl: string;

	constructor(private fb: FormBuilder, private validationService: ValidationService, private authService: AuthService, private notification: NzNotificationService, private router: Router, route: ActivatedRoute) {
		const redirect = route.snapshot.queryParams.redirect;
		this.redirectUrl = !!redirect ? redirect : '/main/problems/all';
	}

	ngOnInit(): void {
		this.formGroup = this.fb.group({
			email: [null, [Validators.required, Validators.email]],
			password: [null, [Validators.required]]
		});
	}

	submitForm(): void {
		this.validationService.formGroup(this.formGroup);
		this.authService
			.login(this.formGroup.value)
			.pipe(take(1))
			.subscribe(() => this.router.navigateByUrl(this.redirectUrl).then(() => this.notification.info('Success', 'You are logged in.')), (response: { error: AuthResponseModel }) => this.notification.create('error', response.error.title, response.error.detail));
	}
}
