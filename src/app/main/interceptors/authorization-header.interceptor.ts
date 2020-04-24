import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserDataService } from '../../core/services/user-data.service';

@Injectable()
export class AuthorizationHeaderInterceptor implements HttpInterceptor {
	constructor(public userDataService: UserDataService) {}

	intercept(req: HttpRequest<'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS'>, next: HttpHandler): Observable<HttpEvent<'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS'>> {
		const authReq = req.clone({
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				Authorization: this.userDataService.getAccessToken()
			})
		});

		return next.handle(authReq);
	}
}
