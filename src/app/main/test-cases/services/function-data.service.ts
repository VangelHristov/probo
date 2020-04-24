import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { ApiResponseModel } from '../../problems/models/api-response.model';
import { extractId } from '../../shared/extract-id';
import { FunctionModel } from '../models/function.model';

@Injectable({ providedIn: 'root' })
export class FunctionDataService {
	private readonly apiUrl: string;

	constructor(private http: HttpClient) {
		this.apiUrl = `${environment.apiUrl}/functions`;
	}

	getById(id: number): Observable<FunctionModel> {
		return this.http.get(`${this.apiUrl}/${id}`);
	}

	save(functionModel: FunctionModel, functionId = -1): Observable<ApiResponseModel> {
		if (functionId > -1) {
			return this.http.put(`${this.apiUrl}/${functionId}`, functionModel);
		}

		return this.http.post(this.apiUrl, functionModel, { observe: 'response' }).pipe(map(extractId));
	}
}
