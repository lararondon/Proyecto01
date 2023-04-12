import { Component } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent {
  v_interpolacion="Ejemplo de interpolación"
  valor_parrafo:boolean=false;
  valor_final="Pulsame"
  
  estado(){
    this.valor_parrafo = !this.valor_parrafo
    this.valor_final=this.valor_parrafo ? "Adiós":"Hola"
  }
}
