import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  
  API_URL='http://localhost:3000';
  user=null;

  constructor(
      private http: HttpClient
    ) {}

  auth(username: string, password: string): Observable<any[]> {
    const log = 'username=' + username + '&password=' + password;
    return this.http.get<any[]>(this.API_URL + '/users?' + log);
  }

  set(user) {
    this.user=user;
  }

  get() {
    return this.user;
  }

  clear() {
    this.user=null;
  }

  logout() {
    this.clear();
  }
}
