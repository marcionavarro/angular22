import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-my-button',
  styleUrl: './my-button.css',
  templateUrl: './my-button.html',
})
export class MyButton {
  @Input() btnText: string = '';
  @Input() btnVariant: 'success' | 'primary' | 'danger' = 'primary';

  @Output() onbtnClick = new EventEmitter<void>();

  btnClicked() {
    this.onbtnClick.emit();
  }
}
