import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;

  constructor() {
    this.titulo = ("componente peliculas");
    console.log("lanzado");
   }

  ngOnInit() {
    console.log("evento oninit lanzado cargado");
  }

ngDoCheck(){
  console.log("docheck lanzado");
}

cambiarTitulo(){
  this.titulo = "Titulo cambiado";
}

ngOnDestroy(){
  console.log("el componente se va a eliminar");
}

}
