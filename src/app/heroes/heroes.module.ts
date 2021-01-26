import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroeComponent } from './heroe/heroe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeroesComponent, HeroeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,    
  ],
  exports: [
    HeroesComponent,
    HeroeComponent
  ]
})
export class HeroesModule { }
