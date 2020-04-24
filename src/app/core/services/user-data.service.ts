import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from 'ngx-localstorage';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserDataService {
	private accessToken = environment.accessTokenKey;
	private helper: JwtHelperService;

	constructor(private storage: LocalStorageService) {
		this.helper = new JwtHelperService();
	}

	isLoggedIn(): boolean {
		const token = this.storage.get(this.accessToken);
		if (token === null) {
			return false;
		}

		return !this.helper.isTokenExpired(token);
	}

	getAccessToken(): string {
		const token = this.storage.get(this.accessToken);
		return token === null ? '' : token;
	}

	saveToken(token: string): void {
		this.storage.set(this.accessToken, token);
	}

	logout(): Promise<boolean> {
		return this.storage.asPromisable().remove(this.accessToken);
	}
}
