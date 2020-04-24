import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestCaseHubComponent } from './components/test-case-hub/test-case-hub.component';
import { TestCaseListComponent } from './components/test-case-list/test-case-list.component';
import { TestCaseResolver } from './resolvers/test-case.resolver';
import { TestCasesByProblemResolver } from './resolvers/test-cases-by-problem.resolver';

const routes: Routes = [
	{
		path: '',
		children: [
			{ path: ':id/list', component: TestCaseListComponent, resolve: { testCases: TestCasesByProblemResolver } },
			{ path: ':problemId/create', component: TestCaseHubComponent },
			{ path: ':problemId/edit/:testCaseId', component: TestCaseHubComponent, resolve: { testCase: TestCaseResolver } },
			{ path: '**', redirectTo: '/main/problems/all' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TestCasesRoutingModule {}
