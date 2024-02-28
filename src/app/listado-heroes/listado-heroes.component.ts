import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.css']
})
export class ListadoHeroesComponent {

  heroes: string[] = ["Superman", "Batman", "Spiderman", "Ironman", "Thor"];
  heroeBorrado: string = "";


  eliminarHeroe(){
    this.heroeBorrado = this.heroes.pop() || "";
  }



}
