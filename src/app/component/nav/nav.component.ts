import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
	public url:string = '';
	public title:string = 'ng-diplomacy';

	constructor(
		private platformLocation: PlatformLocation
	){
	}

	ngOnInit() {
		this.url = this.platformLocation.href;
	}
}