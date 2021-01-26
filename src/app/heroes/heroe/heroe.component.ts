import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();
  

  
  constructor(
    private heroeSvc: HeroesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if( id !== 'nuevo' ){
      this.heroeSvc.getHeroe( id )
      .subscribe( (heroe : HeroeModel ) => {
        this.heroe = heroe;
        this.heroe.id = id;
      })
    }
  }



  guardar( form: NgForm ){

    if( form.invalid ){ return }

    Swal.fire({
      title: 'Espere, por favor',
      text: 'Guardando información..',
      icon: 'info',
      allowOutsideClick: false
    })
    Swal.showLoading();

    let peticion: Observable<any>;

    if( this.heroe.id ){
      peticion = this.heroeSvc.actualizar(this.heroe);
    } 
    else {
      peticion = this.heroeSvc.crear(this.heroe);
    }  

    peticion.subscribe( res => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizó correctamente',
        icon: 'success'
      })
    })
  }

  regresar(){
    this.location.back();
  }
}
