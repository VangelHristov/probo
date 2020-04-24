import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, pluck } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { ApiResponseModel } from '../../problems/models/api-response.model';
import { extractId } from '../../shared/extract-id';
import { FunctionModel } from '../models/function.model';
import { Parameter } from '../models/parameter.model';
import { Sample } from '../models/sample.model';
import { TestCase } from '../models/test-case.model';
import { FunctionDataService } from './function-data.service';
import { ParameterDataService } from './parameter-data.service';
import { SampleDataService } from './sample-data.service';

@Injectable({ providedIn: 'root' })
export class TestCaseDataService {
	private readonly apiUrl: string;

	constructor(private http: HttpClient, private sampleDataService: SampleDataService, private functionDataService: FunctionDataService, private parameterDataService: ParameterDataService) {
		this.apiUrl = environment.apiUrl;
	}

	getByProblemId(problemId: number): Observable<TestCase[]> {
		return this.http.get<TestCase[]>(`${this.apiUrl}/problems/${problemId}/test-cases`).pipe(pluck('content'));
	}

	save(testCase: TestCase, testCaseId = -1): Observable<object> {
		if (testCaseId > -1) {
			return this.http.put(`${this.apiUrl}/test-cases/${testCaseId}`, testCase);
		}

		return this.http.post(`${this.apiUrl}/test-cases`, testCase, { observe: 'response' }).pipe(map(extractId));
	}

	getById(testCaseId: number): Observable<TestCase> {
		return this.http.get<TestCase>(`${this.apiUrl}/test-cases/${testCaseId}`);
	}

	delete(id: number): Observable<ApiResponseModel> {
		return this.http.delete<ApiResponseModel>(`${this.apiUrl}/test-cases/${id}`);
	}

	getTestCaseDetails(testCaseId): Observable<TestCase> {
		let testCaseDetails: TestCase = {};
		return this.getById(parseInt(testCaseId, 10)).pipe(
			mergeMap(testCase => {
				testCaseDetails = testCase;
				return this.sampleDataService.getByTestCaseId(testCase.id);
			}),
			mergeMap((samples: Sample[]) => {
				if (samples.length > 0) {
					testCaseDetails.sample = samples[0];
					return this.parameterDataService.getBySampleId(samples[0].id);
				}

				return of({});
			}),
			mergeMap((parameters: Parameter[]) => {
				testCaseDetails.parameters = parameters;
				if (parameters.length > 0) {
					return this.functionDataService.getById(parameters[0].functionId);
				}

				return of({});
			}),
			mergeMap((functionModel: FunctionModel) => {
				testCaseDetails.function = functionModel;
				return of(testCaseDetails);
			})
		);
	}
}
