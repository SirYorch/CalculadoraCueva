import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperacionServiceService {
  

  Materias =[{
    valor1:1,
    valor2:1,
    operacion:"Suma",
    resultado:2
  }
];

  crear(valor1:number, valor2:number,operacion:string,resultado:number){
    this.Materias.push({
      valor1:valor1,
      valor2:valor2,
      operacion:operacion,
      resultado:resultado
    })
    this.guardarMaterias(this.Materias);
  }
  listar(){
    this.leerMaterias();
    return this.Materias;
  }
  eliminar(materia:any){
    this.Materias.splice(this.Materias.indexOf(materia),1);
  }
  constructor(){

  }

  guardarMaterias(materias: any[]) {
    const materiasString = JSON.stringify(materias);  
    localStorage.setItem('materias', materiasString); 
  }

  leerMaterias() {
    const materiasString = localStorage.getItem('materias'); 
    if (materiasString) {
      this.Materias = JSON.parse(materiasString);  
      console.log('Materias cargadas desde Local Storage');
    } else {
      console.log('No se encontraron materias en Local Storage');
    }
  }

}
