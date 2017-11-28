import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home.component';
import { SobreComponent } from './sobre.component';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { LogonService } from './logon.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        HttpModule,
        PublicRoutingModule,
        SharedModule
    ],
    declarations: [
        PublicComponent,
        HomeComponent,
        LoginComponent,
        SobreComponent
    ],
    providers: [
        LogonService
    ],
})
export class PublicModule { }