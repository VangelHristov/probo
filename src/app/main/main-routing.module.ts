import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainRoutesGuard } from './guards/main-routes.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
	{
		path: '',
		canActivate: [MainRoutesGuard],
		component: LayoutComponent,
		children: [
			{
				path: 'problems',
				loadChildren: () => import('./problems/problems.module').then(m => m.ProblemsModule)
			},
			{
				path: 'test-cases',
				loadChildren: () => import('./test-cases/test-cases.module').then(m => m.TestCasesModule)
			},
			{
				path: '**',
				redirectTo: 'problems'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MainRoutingModule {}
