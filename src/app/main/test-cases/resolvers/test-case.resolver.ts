import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { TestCase } from '../models/test-case.model';
import { TestCaseDataService } from '../services/test-case-data.service';

@Injectable({ providedIn: 'root' })
export class TestCaseResolver implements Resolve<TestCase> {
	constructor(private testCaseDataService: TestCaseDataService) {}

	resolve(route: ActivatedRouteSnapshot): Observable<TestCase> {
		return this.testCaseDataService.getTestCaseDetails(route.params.testCaseId);
	}
}
