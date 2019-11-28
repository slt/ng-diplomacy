import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VariantService } from '../variant.service';

@Component({
	selector: 'app-variant-detail',
	templateUrl: './variant-detail.component.html',
	styleUrls: ['./variant-detail.component.scss']
})
export class VariantDetailComponent implements OnInit {
	variant;
	variantID;

	constructor(
		private route: ActivatedRoute,
		private variantService: VariantService
	) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.variantID = params.variantID;
			this.variantService.getVariant(this.variantID).subscribe(variant => this.variant = variant)
		});
	}

	// findVariant(data) {
	// 	for (var i = 0, len = data.length; i < len; i++) {
	// 		let value = data[i];
	// 		if (value['Name'] == this.variantID) {
	// 			return value;
	// 		}
	// 	}

	// 	return undefined;
	// }
}
