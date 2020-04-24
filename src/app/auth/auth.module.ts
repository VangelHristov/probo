import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
	declarations: [LoginComponent, RegistrationComponent, AuthComponent],
	imports: [AuthRoutingModule, CommonModule, FormsModule, ReactiveFormsModule, NgZorroAntdModule]
})
export class AuthModule {}
