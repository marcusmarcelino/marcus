import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { UsuarioHomeComponent } from './usuario-home.component';
import { PerfilUsuarioComponent } from './perfil-usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioService } from './usuario.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        UsuarioRoutingModule
    ],
    declarations: [
        UsuarioHomeComponent,
        PerfilUsuarioComponent
    ],
	providers: [
        UsuarioService
    ]
})
export class UsuarioModule { }