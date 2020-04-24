import { browser, by, element } from 'protractor';

// tslint:disable:no-any
export class AppPage {
	navigateTo(): Promise<any> {
		return browser.get(browser.baseUrl) as Promise<any>;
	}

	getTitleText(): Promise<string> {
		return element(by.css('app-root .content span')).getText() as Promise<string>;
	}
}
