import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariantListComponent } from './component/variant-list/variant-list.component';
import { VariantDetailComponent } from './component/variant-detail/variant-detail.component';
import { GamesComponent } from './component/games/games.component';
import { HowToPlayComponent } from './component/how-to-play/how-to-play.component';
import { AuthGuard } from './guard/authentication.guard';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
	{ path: '', component: VariantListComponent },
	{ path: 'variants', component: VariantListComponent },
	{ path: 'variant/:variantID', component: VariantDetailComponent },
	{ path: 'games', component: GamesComponent, canActivate: [AuthGuard] },
	{ path: 'how-to-play', component: HowToPlayComponent },
	{ path: 'login', component: LoginComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
