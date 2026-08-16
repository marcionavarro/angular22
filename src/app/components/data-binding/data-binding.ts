import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  productName: string = 'Headphone';
  productPrice: number = 1200;
  maxAllowedQuantity: number = 5;
  isProductActive = false;

  myDynamicType = 'button';

  showWelcomeText() {
    alert('Bem vindo v22');
  }

  onDropdownChange() {
    alert('Dropdown has changed');
  }

  onMouseEnter() {
    console.log('Mouse Enytered');
  }

  onMouseLeft() {
    console.log('Mouse Left Div');
  }
}
