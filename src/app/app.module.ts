import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VariantListComponent } from './component/variant-list/variant-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VariantDetailComponent } from './component/variant-detail/variant-detail.component';
import { RadarSpinnerModule } from 'angular-epic-spinners';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { NavComponent } from './component/nav/nav.component'
import { StorageServiceModule} from 'angular-webstorage-service';
import { GamesComponent } from './component/games/games.component';
import { HowToPlayComponent } from './component/how-to-play/how-to-play.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
	declarations: [
		AppComponent,
		VariantListComponent,
		VariantDetailComponent,
		SpinnerComponent,
		NavComponent,
		GamesComponent,
		HowToPlayComponent,
		LoginComponent
	],
	imports: [
		RadarSpinnerModule,
		BrowserModule,
		HttpClientModule,
		StorageServiceModule,
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
