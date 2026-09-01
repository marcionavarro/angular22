import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNoFormatter',
})
export class CardNoFormatterPipe implements PipeTransform {
  transform(value: string): string {
    const lastFourChar = value.slice(-4);
    return '**** **** **** ' + lastFourChar;
  }
}
