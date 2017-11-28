import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
    templateUrl: 'sobre.component.html'
})

export class SobreComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }
	
	telaHome() {
        this.router.navigate(['/tela/home']);
    }
}