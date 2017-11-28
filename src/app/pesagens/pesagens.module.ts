import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { PesagensHomeComponent } from './pesagens-home.component';
import { PesagensListaComponent } from './pesagens-lista.component';
import { PesagensRoutingModule } from './pesagens-routing.module';
import { PesagensService } from './pesagens.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        PesagensRoutingModule
    ],
    declarations: [
        PesagensHomeComponent,
        PesagensListaComponent
    ],
    providers: [
        PesagensService
    ]
})
export class PesagensModule { }