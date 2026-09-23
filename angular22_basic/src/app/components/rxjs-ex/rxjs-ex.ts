import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Master } from '../../services/master';

@Component({
  imports: [],
  selector: 'app-rxjs-ex',
  styleUrl: './rxjs-ex.css',
  templateUrl: './rxjs-ex.html',
})
export class RxjsEx {
  rollNo = 4;
  rollNoList = of([112, 113, 114, 115, 116]);
  masterService = inject(Master);

  constructor() {
    this.masterService.$selectedRole.subscribe({
      next: (role: string) => {
        debugger;
      },
    });
    this.masterService.$selectedRoleBehaviourSub.subscribe({
      next: (role: string) => {
        debugger;
      },
    });

    /* const promise = new Promise((resolve, reject) => {
      if (this.rollNo % 2 == 0) {
        resolve('Num é Par');
      } else {
        reject('Num é impar');
      }
    });
    promise
      .then((res) => {
        console.log(res);
        debugger;
      })
      .catch((error) => {
        debugger;
        console.log(error);
      }); */

    /* const obs1 = new Observable((res) => {
      if (this.rollNo % 2 == 0) {
        res.next('Num é Par');
      } else {
        res.error('Num é impar');
      }
    });
    obs1.subscribe({
      next: (res: any) => {
        debugger;
      },
      error: (error) => {
        debugger;
        console.log(error);
      },
    });

    this.rollNoList.subscribe((res: number[]) => {
      debugger;
    }); */
  }
}
