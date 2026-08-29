import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-basic',
  imports: [],
  templateUrl: './signal-basic.html',
  styleUrl: './signal-basic.css',
})
export class SignalBasic {
  employeeName: string = 'Marcio Navarro';

  empMobileNo = signal('34988887777');
  isActive: WritableSignal<boolean> = signal(false);
  cityListSignal: WritableSignal<string[]> = signal(['Londres', 'New yourk', 'Los Angeles']);

  constructor() {
    // setTimeout(() => {
    //   debugger;
    //   this.employeeName = 'Carlos Eduardo';
    // }, 2000);

    setTimeout(() => {
      debugger;
      this.empMobileNo.set('11977776666');
    }, 2000);
  }

  changeEmpName() {
    this.employeeName = 'Carlos';
  }

  changeMobile() {
    this.empMobileNo.set('11977776666');
  }
}
