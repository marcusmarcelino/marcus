import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Usuario } from './Usuario';
import { UsuarioService } from './usuario.service';

@Component({
    templateUrl: 'perfil-usuario.component.html',
	providers: [UsuarioService]
})

export class PerfilUsuarioComponent implements OnInit {

    constructor(
	private usuarioService: UsuarioService,
	private router: Router
	) {	}
	
	id:number=0;
	idUm:number=1;
	usuario:Usuario = new Usuario(this.id,'','','','','');
	
	preencherUsuario(): void {
		this.usuario = new Usuario(this.id,'','','','','');
  }
	
    ngOnInit() {
		this.usuarioService.find(this.idUm)
			.subscribe(usuario => this.usuario = usuario);
		
	}
	

	telaHome() {
        this.router.navigate(['/tela/home']);
    }
}