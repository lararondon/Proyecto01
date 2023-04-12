import { Component } from '@angular/core';

@Component({
  selector: 'app-funcion',
  templateUrl: './funcion.component.html',
  styleUrls: ['./funcion.component.css']
})
export class FuncionComponent {

  imprimir(){
    let numero:number=10
    let cadena:string="Aprendiendo typescript"
    let bulean:boolean=true
    let random:any=45
    let desconocido:unknown="Prueba de variable desconocida"

    console.log(numero)
    console.log(cadena)
    console.log(bulean)
    console.log(random)
    console.log(desconocido)
  }

  ngOnInit(){
    this.imprimir()
  }
 
}





