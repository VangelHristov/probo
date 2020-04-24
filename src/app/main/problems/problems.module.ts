import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { QuillModule } from 'ngx-quill';

import { ProblemDetailsComponent } from './components/problem-details/problem-details.component';
import { ProblemFormComponent } from './components/problem-form/problem-form.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { EnumPipe } from './pipes/enum.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ProblemsRoutingModule } from './problems-routing.module';

@NgModule({
	imports: [ProblemsRoutingModule, ReactiveFormsModule, QuillModule.forRoot(), NgZorroAntdModule, CommonModule, InfiniteScrollModule, MonacoEditorModule.forRoot(), FormsModule],
	declarations: [ProblemFormComponent, EnumPipe, ProblemListComponent, TruncatePipe, ProblemDetailsComponent]
})
export class ProblemsModule {}
