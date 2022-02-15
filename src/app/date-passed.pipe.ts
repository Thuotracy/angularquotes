import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePassed'
})
export class DatePassedPipe implements PipeTransform {

  transform(value: any): number {
    let today:any=new Date();
  
    var dateDifference=Math.abs(value-today);
    var dateSeconds=dateDifference*0.001;
    const seconds=86400;
    var daysPassed= Math.floor(dateSeconds/seconds);

    return daysPassed;
  }

}
