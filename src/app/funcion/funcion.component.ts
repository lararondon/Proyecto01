import { Component } from '@angular/core';

@Component({
  selector: 'app-funcion',
  templateUrl: './funcion.component.html',
  styleUrls: ['./funcion.component.css']
})
export class FuncionComponent {

    numero:number=10
    numero_big:bigint=1000000n;
    cadena1:string="cadena con comillas dobles"
    cadena2:string='cadena con comillas simples'
    cadena3: string=`${this.cadena1},${this.cadena2},cadena con comillas torcidas`
    cadena_vacia:string=""
    bulean:boolean=true
    random:any=45
    desconocido:unknown="Prueba de variable desconocida"
}





