import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VariantService } from '../../service/variant.service';
import { Observable } from "rxjs"

@Component({
	selector: 'app-variant-list',
	templateUrl: './variant-list.component.html',
	styleUrls: ['./variant-list.component.scss']
})
export class VariantListComponent implements OnInit {
	variants: IterableIterator<any>;

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