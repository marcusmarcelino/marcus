import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LogonService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  autenticar(username: string, password: string) {
    const log = 'username=' + username + '&password=' + password;
    return this.http.get(this.API_URL + '/users?' + log);
  }

}
