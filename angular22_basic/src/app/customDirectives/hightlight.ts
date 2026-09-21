import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]',
})
export class Hightlight {
  @Input() textColor: string = 'red';

  constructor(private elementRef: ElementRef) {
    console.log('Hightlight executado');
  }

  @HostListener('mouseenter')
  onMouseOver() {
    console.log('Mouse entrou no elemento');
    this.elementRef.nativeElement.style.color = this.textColor;
  }

  @HostListener('mouseleave')
  onMoudseLeftElement() {
    console.log('Mouse saiu do elemento');
    this.elementRef.nativeElement.style.color = 'black';
  }
}
