import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
// import { environment } from '@environments/environment';
// import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

	// public token: Observable<string>;
	public isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
	// public isLoggedInObservable = this.isLoggedInSubject.

	constructor(
		@Inject(LOCAL_STORAGE) private storage: StorageService
	) {}

	public isLoggedIn(): Observable<boolean> {
		return this.isLoggedInSubject.asObservable();
	}

	public hasToken() {
		let hasToken = !!this.getToken();
		console.log("hasToken " + hasToken);
		return hasToken;
	}

	public setToken(token: string) {
		this.storage.set("token", token);
		this.isLoggedInSubject.next(true);
	}

	public getToken(): string {
		let token = this.storage.get("token");
		console.log("getToken " + token);
		return token;
	}

	public clearToken() {
		this.storage.remove("token");
		this.isLoggedInSubject.next(false);
	}
}