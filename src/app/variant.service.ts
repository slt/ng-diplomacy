import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';
import { first } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

// export interface VariantMap {
// 	[variantID: string] : any;
// }

export class VariantService {
	private variants$;

	constructor(
		private http: HttpClient
	) {}

	getVariants(): Observable<Map<String, any>> {
		if (!this.variants$) {
			this.variants$ = this.http.get('https://diplicity-engine.appspot.com/Variants?api-level=7', {
				headers: {'Accept': 'application/json'}
			}).pipe(map(data => {
				let variantMap = new Map<String, any>();
				let variants = data['Properties']

				for (let i = 0; i < variants.length; i++) {
					let variant = variants[i].Properties
					let variantID = this.getVariantID(variant.Name)
					variant.ID = variantID
					variant.SVG = this.getMapFromLinks(variants[i].Links)
					variantMap.set(variantID, variant)
				}
				return variantMap
			}))
		}

		return this.variants$;
	}

	getMapFromLinks(links): string {
		for (let i = 0; i < links.length; i++) {
			if (links[i].Rel == "map") {
				return links[i].URL
			}
		}
	}

	getVariant(variantID: string): Observable<any> {
		return this.getVariants().pipe(map(variants => {
			return variants.get(variantID)
		}));
	}

	getVariantID(name: string): string {
		return name.replace(new RegExp(' ', 'g'), '-').toLowerCase();
	}
}