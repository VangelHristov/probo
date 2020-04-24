import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestCasesByProblemResolver } from '../test-cases/resolvers/test-cases-by-problem.resolver';
import { ProblemDetailsComponent } from './components/problem-details/problem-details.component';
import { ProblemFormComponent } from './components/problem-form/problem-form.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDataResolver } from './resolvers/problem-data.resolver';

const routes: Routes = [
	{
		path: '',
		children: [
			{ path: 'create', component: ProblemFormComponent },
			{ path: 'all', component: ProblemListComponent },
			{ path: 'edit/:id', component: ProblemFormComponent, resolve: { problem: ProblemDataResolver } },
			{ path: 'details/:id', component: ProblemDetailsComponent, resolve: { problem: ProblemDataResolver, testCases: TestCasesByProblemResolver } },
			{ path: '**', redirectTo: 'all' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProblemsRoutingModule {}
