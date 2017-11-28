import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesagensHomeComponent } from './pesagens-home.component';
import { PesagensListaComponent } from './pesagens-lista.component';

const rotas: Routes = [
    {
        path: 'pesagens', component: PesagensHomeComponent, children: [
            { path: '', component: PesagensListaComponent }
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
export class PesagensRoutingModule { }
