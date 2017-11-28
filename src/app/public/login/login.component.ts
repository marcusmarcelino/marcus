import {Component, OnInit} from '@angular/core';
import {LogonService} from "../logon.service";
import {AuthService} from "../../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string;
  senha: string;
  erro = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  entrar() {
    this.authService.auth(this.usuario, this.senha)
      .subscribe(users => {
        if (users.length > 0) {
          this.erro = null;
          this.authService.set(users[0]);
          this.router.navigate(['tela/home']);
        } else {
          this.erro = 'Login ou senha incorretos';
        }
      });
  }
  
  telaHome(){
	this.router.navigate(['/tela/home']);
  }
}
