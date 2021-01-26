import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HeroeModel } from '../models/heroe.model';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  heroes: HeroeModel[] = [];
  cargando = false;



  constructor(
    private heroeSvc: HeroesService
  ) { }

  ngOnInit(): void {

    this.cargando = true;
    this.heroeSvc.getHeroes()
      .subscribe(heroes => {
        this.cargando = false;
        this.heroes = heroes
      })
  }


  borrarHeroe(heroe: HeroeModel, i: number) {

    Swal.fire({
      title: 'Esta seguro de borrar?',
      text: `No podrá recuperar la información de ${heroe.nombre}`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true

    }).then(res => {
      if (res.value) {

        this.heroes.splice(i, 1);
        this.heroeSvc.borrar(heroe.id)
          .subscribe();
      }
    })
  }

}
