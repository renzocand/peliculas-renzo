import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  url:string = 'https://image.tmdb.org/t/p/w500';

  transform(value: object, pelicula:boolean=false): string {

    if(pelicula){
      if(value['poster_path']){
        let path = value['poster_path']
        return this.url+path
     }
     return '../../assets/img/noImage.jpg'
    }

    if(value['backdrop_path']){
       let path = value['backdrop_path']
       return this.url+path
    }
    if(value['poster_path']){
       let path = value['poster_path']
       return this.url+path
    }
    
    return '../../assets/img/noImage.jpg'
  }

}
