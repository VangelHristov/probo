import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [{ path: '', component: AuthComponent, children: [{ path: 'login', component: LoginComponent }, { path: 'register', component: RegistrationComponent }, { path: '**', redirectTo: 'login' }] }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule {}
