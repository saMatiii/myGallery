import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagefilter'
})
export class FilterPipe implements PipeTransform {

  transform(listphotos: any[], critiria: string): any {
    if(critiria ==='all'){
      return listphotos;
    }else return listphotos.filter(element =>{ return element.category === critiria})

  }

}
