import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioHomeComponent } from './usuario-home.component';
import { PerfilUsuarioComponent } from './perfil-usuario.component';

const rotas: Routes = [
    {
        path: 'usuario', component: UsuarioHomeComponent, children: [
            { path: '', component: PerfilUsuarioComponent }
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
export class UsuarioRoutingModule { }
