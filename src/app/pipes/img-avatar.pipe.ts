import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgAvatar'
})
export class ImgAvatarPipe implements PipeTransform {

  transform(url: string): string {

    if( url ){
      return url;
    }

    return './assets/img/no-img.png';
  }

}
