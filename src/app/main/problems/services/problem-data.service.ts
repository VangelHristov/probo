import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { extractId } from '../../shared/extract-id';
import { ApiResponseModel } from '../models/api-response.model';
import { Problem } from '../models/problem.model';

@Injectable({ providedIn: 'root' })
export class ProblemDataService {
	private readonly problemsApiUrl: string;

	constructor(private http: HttpClient) {
		this.problemsApiUrl = `${environment.apiUrl}/problems`;
	}

	save(problem: Problem, problemId = -1): Observable<ApiResponseModel> {
		if (problemId > -1) {
			return this.http.put<ApiResponseModel>(`${this.problemsApiUrl}/${problemId}`, problem).pipe(map(() => Object({ id: problemId })));
		}

		return this.http.post<ApiResponseModel>(this.problemsApiUrl, problem, { observe: 'response' }).pipe(map(extractId));
	}

	getAll(page: number): Observable<{ last: boolean; content: Problem[] }> {
		return this.http.get<ApiResponseModel>(this.problemsApiUrl, { params: { page: String(page) } }).pipe(map(res => Object({ last: res.last, content: res.content })));
	}

	getById(id: number): Observable<Problem> {
		return this.http.get<Problem>(`${this.problemsApiUrl}/${id}`);
	}
}
