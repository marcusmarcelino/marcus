import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './public/public.module';
import { PesagensModule } from './pesagens/pesagens.module';
import { UsuarioModule } from './usuario/usuario.module';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
		PesagensModule,
		UsuarioModule,
        PublicModule,
        AppRoutingModule,
		NgbModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        PaginaNaoEncontradaComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }