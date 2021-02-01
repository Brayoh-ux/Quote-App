import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today :Date = new Date();
    let todayNoTime:any = new Date(today.getFullYear(), today.getMonth(),today.getDate())

    var diff = Math.abs(value - todayNoTime)
    const secondsInDay = 86400;
    var toSeconds = diff * 0.001;

    var dateCounter = toSeconds/secondsInDay;

    if(dateCounter >= 1 && value > todayNoTime){
      return 0;
    }
    else{
      return dateCounter;
    }
  }

}
