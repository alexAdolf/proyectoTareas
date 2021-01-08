import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendoangular';

  public mostrarPeliculas: boolean;

  constructor(){

    this.mostrarPeliculas = true;

  }

  ocultarPeliculas(){
    this.mostrarPeliculas = false;
  }
}
