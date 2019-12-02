import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
	public url:string = '';
	public title:string = 'ng-diplomacy';
	public isAuthenticated:boolean = false;

	constructor(
		private platformLocation: PlatformLocation,
		private authenticationService: AuthenticationService
	){
	}

	ngOnInit() {
		this.url = this.platformLocation.href;
		this.authenticationService.isLoggedInSubject.subscribe(state => this.isAuthenticated = state);
	}

	logout() {
		this.authenticationService.clearToken()
	}
}