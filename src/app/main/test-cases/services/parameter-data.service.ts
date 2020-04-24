import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { ApiResponseModel } from '../../problems/models/api-response.model';
import { extractId } from '../../shared/extract-id';
import { Parameter } from '../models/parameter.model';

@Injectable({ providedIn: 'root' })
export class ParameterDataService {
	private readonly apiUrl: string;

	constructor(private http: HttpClient) {
		this.apiUrl = environment.apiUrl;
	}

	getBySampleId(sampleId: number): Observable<Parameter[]> {
		return this.http.get<Parameter[]>(`${this.apiUrl}/samples/${sampleId}/parameters`).pipe(pluck('content'));
	}

	save(parameter: Parameter, parameterId = -1): Observable<ApiResponseModel> {
		if (parameterId > -1) {
			return this.http.put(`${this.apiUrl}/parameters/${parameterId}`, parameter);
		}

		return this.http.post(`${this.apiUrl}/parameters`, parameter, { observe: 'response' }).pipe(map(extractId));
	}

	delete(id: number): Observable<ApiResponseModel> {
		return this.http.delete(`${this.apiUrl}/parameters/${id}`);
	}
}
