import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VariantListComponent } from './variant-list/variant-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VariantDetailComponent } from './variant-detail/variant-detail.component';
import { RadarSpinnerModule } from 'angular-epic-spinners';
import { SpinnerComponent } from './spinner/spinner.component'


@NgModule({
	declarations: [
		AppComponent,
		VariantListComponent,
		VariantDetailComponent,
		SpinnerComponent
	],
	imports: [
		RadarSpinnerModule,
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		RouterModule.forRoot([
		{ path: '', component: VariantListComponent },
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
