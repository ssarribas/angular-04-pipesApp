import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Fernando', 'Eduardo'];
  clientesNumber: number = 1;
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  }

  // JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500 );
  });



  constructor() { }

  ngOnInit(): void {
  }

  cambiarPersona(){
    if(this.genero === 'masculino') {
      this.genero = 'femenino';
      this.nombre = 'Susana';
    } else {
      this.genero = 'masculino'
      this.nombre = 'Fernando';
    }
  };

  borrarCliente() {
    this.clientes.pop();
  }

  restarCliente() {
    this.clientesNumber --;
  }

  sumarCliente() {
    this.clientesNumber ++;
  }
}
