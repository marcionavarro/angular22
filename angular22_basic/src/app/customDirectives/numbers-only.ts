import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]',
})
export class NumbersOnly {
  @HostListener('keypress', ['$event'])
  onUserInput(event: KeyboardEvent) {
    debugger;
    const allowedNumbers = /[0-9]/;
    if (!allowedNumbers.test(event.key)) {
      event.preventDefault();
    }
  }
}
