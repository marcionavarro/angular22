import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PageHeader } from '../../resuabbles/page-header/page-header';
import { PipeEx } from '../pipe-ex/pipe-ex';

@Component({
  imports: [PageHeader, PipeEx],
  selector: 'app-life-cycle',
  styleUrl: './life-cycle.css',
  templateUrl: './life-cycle.html',
})
export class LifeCycle
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    DoCheck,
    OnDestroy
{
  @ViewChild('temName') textRef!: ElementRef;
  @ViewChild('div1Tem') div1Element!: ElementRef;
  @ViewChild(PipeEx) pipeCompInstance!: PipeEx;

  constructor() {
    // O construtor é chamado quando a instância do componente é criada, mas antes de qualquer ciclo de vida do Angular ser executado.
    console.log('constructor executed');
  }

  readPipeCom() {
    debugger;
    if (this.pipeCompInstance) {
      const data = this.pipeCompInstance.currentData;
    }
  }

  readTextValue() {
    debugger;
    if (this.textRef) {
      const value = this.textRef.nativeElement.value;
      alert(value);
    }
  }

  addBgColor(color: string) {
    if (this.div1Element) {
      this.div1Element.nativeElement.style.backgroundColor = color;
    }
  }

  ngOnInit(): void {
    // Chamada de API, inicialização de dados, etc., podem ser realizadas aqui.
    // As assinaturas podem ser inicializadas aqui e canceladas no ngOnDestroy.
    console.log('ngOnInit executed');
  }

  ngAfterContentInit(): void {
    // O conteúdo do componente é inicializado, portanto, podemos acessar o conteúdo projetado aqui.
    console.log('ngAfterContentInit executed');
  }

  ngAfterContentChecked(): void {
    // A detecção de mudanças é executada após ngAfterContentInit e antes de ngAfterViewInit
    console.log('ngAfterContentChecked executed');
  }

  ngAfterViewInit(): void {
    // Os filhos da view são inicializados e a view é renderizada, portanto, podemos acessar os filhos da view aqui.
    if (this.textRef) {
      this.textRef.nativeElement.value = 'React JS';
    }
    console.log('ngAfterViewInit executed');
  }

  ngAfterViewChecked(): void {
    // A detecção de mudanças é executada após ngAfterViewInit e antes de ngOnDestroy
    console.log('ngAfterViewChecked executed');
  }

  ngDoCheck(): void {
    // A detecção de mudanças é executada após ngAfterViewChecked e antes de ngOnDestroy
    console.log('ngDoCheck executed');
  }

  ngOnDestroy(): void {
    // Limpeza de recursos, cancelamento de assinaturas, etc., podem ser realizados aqui.
    // Este método é chamado antes do componente ser destruído e removido da árvore de componentes.
    console.log('ngOnDestroy executed');
  }
}
