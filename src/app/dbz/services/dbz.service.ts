import { Personaje } from './../interfaces/dbz.interface';
import { Injectable } from "@angular/core";

@Injectable()
export class DbzService{

  private _personajes: Personaje[] = [
    {
      nombre: "Naruto",
      poder: 1500
    },
  {
    nombre: "Sasuke",
    poder: 1450
  },
  {
    nombre: "Krillen",
    poder: 700
  },
  {
    nombre: "Goku",
    poder: 15000
  },
  {
    nombre: "Vegeta",
    poder: 8500
  }
  ];

  get personajes(){
    return [...this._personajes];
  }

  constructor(){
    console.log("service found");
  }

  agregarPersonaje(personaje: Personaje){
    // if(personaje.nombre.trim().length === 0){ return; }
    console.log(personaje);

    this._personajes.push(personaje);

  }

}
