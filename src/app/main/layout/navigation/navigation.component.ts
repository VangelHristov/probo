import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

import { UserDataService } from '../../../core/services/user-data.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
	constructor(private userDataService: UserDataService, private notification: NzNotificationService, private router: Router) {}

	onLogout(): void {
		this.userDataService.logout().then(() => this.router.navigate(['user', 'login']).then(() => this.notification.create('info', 'Success', 'You logged out.')));
	}
}
