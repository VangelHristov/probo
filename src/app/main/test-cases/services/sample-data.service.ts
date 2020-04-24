import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { ApiResponseModel } from '../../problems/models/api-response.model';
import { extractId } from '../../shared/extract-id';
import { Sample } from '../models/sample.model';

@Injectable({ providedIn: 'root' })
export class SampleDataService {
	private readonly apiUrl: string;

	constructor(private http: HttpClient) {
		this.apiUrl = environment.apiUrl;
	}

	getByTestCaseId(testCaseId: number): Observable<Sample[]> {
		return this.http.get<Sample[]>(`${this.apiUrl}/test-cases/${testCaseId}/samples`).pipe(pluck('content'));
	}

	save(sample: Sample, sampleId = -1): Observable<ApiResponseModel> {
		if (sampleId > -1) {
			return this.http.put(`${this.apiUrl}/samples/${sampleId}`, sample);
		}

		return this.http.post(`${this.apiUrl}/samples`, sample, { observe: 'response' }).pipe(map(extractId));
	}
}
