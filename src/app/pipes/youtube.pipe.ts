import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){
  }
  transform(value: object, args?: any): any {
    if(value['key']){
      let url = `https://www.youtube.com/embed/${value['key']}`
      return this.domSanitizer.bypassSecurityTrustResourceUrl(url)
    }
  }

}
