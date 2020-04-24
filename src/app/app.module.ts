import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { en_US, NgZorroAntdModule, NZ_I18N } from 'ng-zorro-antd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthorizationHeaderInterceptor } from './main/interceptors/authorization-header.interceptor';

registerLocaleData(en);

@NgModule({
	declarations: [AppComponent],
	imports: [HttpClientModule, BrowserModule, AppRoutingModule, NgZorroAntdModule, ReactiveFormsModule, CoreModule, BrowserAnimationsModule],
	providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: HTTP_INTERCEPTORS, useClass: AuthorizationHeaderInterceptor, multi: true }],
	bootstrap: [AppComponent]
})
export class AppModule {}
