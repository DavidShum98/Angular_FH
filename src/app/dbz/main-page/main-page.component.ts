import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

// interface Personaje {
//   nombre: string,
//   poder : number
// }

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // personajes: Personaje[] = [
  //   {
  //     nombre: "Naruto",
  //     poder: 1500
  //   },
  // {
  //   nombre: "Sasuke",
  //   poder: 1450
  // },
  // {
  //   nombre: "Krillen",
  //   poder: 700
  // },
  // {
  //   nombre: "Goku",
  //   poder: 15000
  // },
  // {
  //   nombre: "Vegeta",
  //   poder: 8500
  // }
  // ];

  // personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){ return; }
    // console.log(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: "",
      poder: 0
    }
  }


  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService){
    // this.personajes = this.DbzService.personajes;
  }

}
