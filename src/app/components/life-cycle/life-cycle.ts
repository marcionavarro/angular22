import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  imports: [],
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
  constructor() {
    // O construtor é chamado quando a instância do componente é criada, mas antes de qualquer ciclo de vida do Angular ser executado.
    console.log('constructor executed');
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
