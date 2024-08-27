import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gmtOffsetPipe',
  standalone: true,
})
export class GmtOffsetPipe implements PipeTransform {
  transform(value: number, currentDate: Date = new Date()): string {
    const date = new Date(
      currentDate.getTime() +
        currentDate.getTimezoneOffset() * 60 * 1000 +
        value * 1000
    );
    return `${date.getHours()}:${date.getMinutes()}`;
  }
}
