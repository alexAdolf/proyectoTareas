import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    template: `
        <h1>hola componente horrible</h1>
    `
})

export class MiComponente {

    public mostrarPeliculas: boolean;
    constructor(){

        this.mostrarPeliculas = true;
        console.log("componente mi-componente cargado");
    }
}