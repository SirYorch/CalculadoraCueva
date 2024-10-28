import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OperacionServiceService } from '../operacion-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-operaciones-component',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './operaciones-component.component.html',
  styleUrls: ['./operaciones-component.component.css']
})
export class OperacionesComponentComponent {
  resultado: number = 0;
  valor1: number = 0;
  valor2: number = 0;
  operacion: string = ''; 

  constructor(private operacionService: OperacionServiceService) {}

  operar() {
    switch (this.operacion) {
      case 'suma':
        console.log(this.operacion);
        this.resultado=this.valor1+this.valor2;
        this.operacionService.crear(this.valor1,this.valor2,this.operacion,this.resultado)
        break;
      case 'resta':
        console.log(this.operacion);
        this.resultado = this.valor1 - this.valor2;
        this.operacionService.crear(this.valor1,this.valor2,this.operacion,this.resultado)
        break;
      case 'multiplicacion':
        console.log(this.operacion);
        this.resultado = this.valor1 * this.valor2;
        this.operacionService.crear(this.valor1,this.valor2,this.operacion,this.resultado)
        break;
      case 'division':
        console.log(this.operacion);
        if (this.valor2 !== 0) {
          this.resultado = this.valor1 / this.valor2;
          this.operacionService.crear(this.valor1,this.valor2,this.operacion,this.resultado)
        } else {
          this.resultado = 0; 
        }
        break;
      default:
        this.resultado = 0; 
    }
  }
  operaciones:any=[];
  listar(){
    this.operaciones = this.operacionService.listar();
    console.log(this.operaciones);
  }
}
