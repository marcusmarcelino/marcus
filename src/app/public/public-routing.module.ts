import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home.component';
import { SobreComponent } from './sobre.component';
import { LoginComponent } from './login/login.component';

const rotas: Routes = [
    {
        path: '', component: PublicComponent, children: [
			{ path: 'tela/home', component: HomeComponent },
            { path: 'sobre', component: SobreComponent },
            { path: '', component: LoginComponent }
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class PublicRoutingModule { }