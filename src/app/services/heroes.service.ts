import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { map, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = environment.fire_api;



  constructor(private http: HttpClient) { }



  crear(heroe: HeroeModel){
  
    return this.http.post(`${this.url}/heroes.json`, heroe)
    .pipe( map( res => {
      heroe.id = res["name"];
      return heroe;
    }))
  }

  actualizar(heroe: HeroeModel){
    const heroeTemp = { ...heroe };
    delete heroeTemp.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp)
  }

  borrar( id : string ){
    return this.http.delete(`${this.url}/heroes/${id}.json`)
  }

  getHeroe( id: string ){
    return this.http.get(`${this.url}/heroes/${id}.json`)
  }

  getHeroes() {
    return this.http.get(`${this.url}/heroes.json`)
    // .pipe( map( res => this.crearArreglo(res) ))
    .pipe( 
      map( this.crearArreglo ),
      delay( 1000 )
      ) //forma resumido de hacer lo mismo de arriba
  }

  crearArreglo(heroesObj: object){

    const heroes: HeroeModel[] = []

    if( heroesObj === null){ return []; }

    Object.keys( heroesObj ).forEach( key => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;
      heroes.push( heroe );
    })
    return heroes;
  }
}
