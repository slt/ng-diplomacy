import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(
		@Inject(DOCUMENT) private document: Document,
		private router: Router,
		private route: ActivatedRoute,
		private authenticationService: AuthenticationService
	) {}

	ngOnInit() {
		if (!this.authenticationService.isLoggedInSubject.getValue()) {
			let token: string = this.route.snapshot.queryParamMap.get('token');
			if (token == null || token == "") {
				console.log("Redirecting");
				this.document.location.href = "https://diplicity-engine.appspot.com/Auth/Login?api-level=7&redirect-to=" + this.document.location.href;
				return;
			}
			console.log("Got token");
			this.authenticationService.setToken(token)
		}
		else {
			console.log("Already authenticated");
		}

		this.router.navigate(['']);
	}
}
