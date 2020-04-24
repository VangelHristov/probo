import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Problem } from '../models/problem.model';
import { ProblemDataService } from '../services/problem-data.service';

@Injectable({
	providedIn: 'root'
})
export class ProblemDataResolver implements Resolve<Problem> {
	constructor(private problemDataService: ProblemDataService) {}

	resolve(route: ActivatedRouteSnapshot): Observable<Problem> {
		return this.problemDataService.getById(parseInt(route.params.id, 10));
	}
}
