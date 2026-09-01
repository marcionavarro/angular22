import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { CardNoFormatterPipe } from '../../pipes/card-no-formatter-pipe';

@Component({
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DecimalPipe,
    SlicePipe,
    JsonPipe,
    DatePipe,
    CardNoFormatterPipe,
  ],
  selector: 'app-pipe-ex',
  styleUrl: './pipe-ex.css',
  templateUrl: './pipe-ex.html',
})
export class PipeEx {
  studentName: string = 'Marcio Navarro';

  studentAddress: string = 'Rua das Flores, 123, São Paulo, SP';

  productPrice: number = 1200.1526;

  rollNoList: number[] = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  cardNo = '2324243344556767';

  currentData: Date = new Date();

  studentObj = {
    name: 'Marcio',
    city: 'São Paulo',
    pincode: 123456,
  };

  //capitalizeName: string = '';

  constructor() {
    //this.capitalizeName = this.studentName.toUpperCase();
    debugger;
  }
}
