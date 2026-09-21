import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCopyPaste]',
})
export class CopyPaste {
  constructor(private elementRef: ElementRef) {}

  @HostListener('click')
  onCopy() {
    debugger;
    const textOfElement = this.elementRef.nativeElement.innerText;
    navigator.clipboard
      .writeText(textOfElement)
      .then(() => {
        // opcionalmente, emita um evento ou exiba uma notificação do tipo "toast" com a mensagem "copiado!"
      })
      .catch((err) => console.log('Erro ao copiar o texto: ', err));
  }
}
