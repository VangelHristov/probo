import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ContentComponent } from './layout/content/content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, NgZorroAntdModule, MainRoutingModule, InfiniteScrollModule],
	declarations: [LayoutComponent, NavigationComponent, FooterComponent, ContentComponent]
})
export class MainModule {}
