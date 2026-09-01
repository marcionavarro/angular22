import { NgClass, NgStyle } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-exp',
  imports: [NgClass, NgStyle, FormsModule],
  templateUrl: './directive-exp.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './directive-exp.css',
})
export class DirectiveExp {
  divClassName: string = 'bg-success';

  isCheckActive = false;

  num1 = '';

  isTextValid = false;

  inputColorValue = '';

  div4Css: any = {};

  addDiv1Class(className: string) {
    this.divClassName = className;
  }

  checkCharLength() {
    debugger;
    if (this.num1.length > 5) {
      this.isTextValid = true;
    } else {
      this.isTextValid = false;
    }
  }

  changeType(type: string) {
    if (type == 'circle') {
      this.div4Css = {
        'background-color': 'red',
        height: '200px',
        width: '200px',
        'border-radius': '50%',
      };
    } else if (type == 'square') {
      this.div4Css = {
        'background-color': 'blue',
        height: '200px',
        width: '200px',
      };
    }
  }
}
