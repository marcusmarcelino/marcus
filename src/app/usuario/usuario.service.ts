import { Injectable } from '@angular/core';
import { Http, RequestOptions,Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Usuario } from './Usuario';


@Injectable()
export class UsuarioService {
    private headers = null;
    private options = null;

    constructor(private http: Http) { 
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers }); 
    }

    all(): Observable<any[]> {
        return this.http.get('http://localhost:3000/usuarios')
            .map(response => response.json());
    }
	find(id: number): Observable<Usuario> {
        return this.all().map(usuarios => usuarios.find(usuario => usuario.id === id));
    }
}