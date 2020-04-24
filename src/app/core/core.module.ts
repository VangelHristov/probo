import { NgModule } from '@angular/core';
import { NgxLocalStorageModule } from 'ngx-localstorage';

@NgModule({
	imports: [NgxLocalStorageModule.forRoot()],
	declarations: [],
	exports: [NgxLocalStorageModule]
})
export class CoreModule {}
