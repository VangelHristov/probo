import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

import { UserDataService } from '../../core/services/user-data.service';

@Injectable({ providedIn: 'root' })
export class MainRoutesGuard implements CanActivate {
	constructor(private userDataService: UserDataService, private router: Router, private notification: NzNotificationService) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
		if (this.userDataService.isLoggedIn()) {
			return true;
		}

		return this.router
			.navigate(['user', 'login'], {
				queryParams: {
					redirect: state.url
				}
			})
			.then(() => {
				this.notification.create('warning', 'Unauthorized!', 'Please login.');
				return false;
			});
	}
}
