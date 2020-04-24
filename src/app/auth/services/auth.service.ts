import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment.prod';
import { UserDataService } from '../../core/services/user-data.service';
import { AccountModel } from '../models/account.model';
import { AuthResponseModel } from '../models/auth-response.model';
import { CredentialsModel } from '../models/credentials.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
	private readonly apiAuth: string;
	private readonly apiAccount: string;

	constructor(private http: HttpClient, private userService: UserDataService) {
		this.apiAuth = `${environment.apiUrl}/auth`;
		this.apiAccount = `${environment.apiUrl}/accounts`;
	}

	login(credentials: CredentialsModel): Observable<HttpResponse<object>> {
		return this.http.post(this.apiAuth, credentials, { observe: 'response' }).pipe(tap(res => this.userService.saveToken(res.headers.get('Authorization'))));
	}

	register(account: AccountModel): Observable<AuthResponseModel> {
		return this.http.post<AuthResponseModel>(this.apiAccount, account);
	}
}
