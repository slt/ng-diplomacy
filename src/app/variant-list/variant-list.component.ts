import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VariantService } from '../variant.service';

@Component({
	selector: 'app-variant-list',
	templateUrl: './variant-list.component.html',
	styleUrls: ['./variant-list.component.scss']
})
export class VariantListComponent implements OnInit {
	variants;

	constructor(
		private route: ActivatedRoute,
		private variantService: VariantService
	) { }

	ngOnInit() {
		this.variantService.getVariants().subscribe(
			variants => this.variants = variants.values()
		);
	}
}