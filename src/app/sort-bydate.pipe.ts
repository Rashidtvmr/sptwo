import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBydate'
})
export class SortBydatePipe implements PipeTransform {
  flag:boolean=true;
  result;
  transform(value: any, args?: any): any {
    if(value.length===0)
      return value;
    this.result=value.sort(function(a,b){
        let c = new Date(a.postedon);
        let d = new Date(b.postedon);
        return this.c-this.d;
        });
        return this.result;
  }

}
