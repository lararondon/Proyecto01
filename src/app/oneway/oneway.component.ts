import { Component } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent {
  v_interpolacion="Ejemplo de interpolación"
  texto: string=""
  
  cambiar(){
    this.texto="Usando one way binding"
  }
}
