import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariantListComponent } from './variant-list/variant-list.component';
import { VariantDetailComponent } from './variant-detail/variant-detail.component';

const routes: Routes = [
	{ path: '', component: VariantListComponent },
	{ path: 'variants', component: VariantListComponent },
	{ path: 'variant/:variantID', component: VariantDetailComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
