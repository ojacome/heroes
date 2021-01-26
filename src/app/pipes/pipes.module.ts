import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgAvatarPipe } from './img-avatar.pipe';



@NgModule({
  declarations: [ImgAvatarPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ImgAvatarPipe
  ]
})
export class PipesModule { }
