import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { QuillModule } from 'ngx-quill';

import { FunctionFormComponent } from './components/function-form/function-form.component';
import { ParameterFormComponent } from './components/parameter-form/parameter-form.component';
import { ParameterListComponent } from './components/parameter-list/parameter-list.component';
import { SampleFormComponent } from './components/sample-form/sample-form.component';
import { TestCaseFormComponent } from './components/test-case-form/test-case-form.component';
import { TestCaseHubComponent } from './components/test-case-hub/test-case-hub.component';
import { TestCaseListComponent } from './components/test-case-list/test-case-list.component';
import { TestCasesRoutingModule } from './test-cases-routing.module';

@NgModule({
	imports: [ReactiveFormsModule, QuillModule.forRoot(), NgZorroAntdModule, CommonModule, TestCasesRoutingModule],
	declarations: [TestCaseListComponent, TestCaseHubComponent, TestCaseFormComponent, SampleFormComponent, ParameterFormComponent, ParameterListComponent, FunctionFormComponent]
})
export class TestCasesModule {}
