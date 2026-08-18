import { Routes } from '@angular/router';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-binding/data-binding';
import { DirectiveExp } from './components/directive-exp/directive-exp';
import { NotFound } from './components/not-found/not-found';
import { ControlFlow } from './components/control-flow/control-flow';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'databinding',
    pathMatch: 'full',
  },
  {
    path: 'variables',
    component: Variables,
  },
  {
    path: 'databinding',
    component: DataBinding,
  },
  {
    path: 'directives',
    component: DirectiveExp,
  },
  {
    path: 'control-flow',
    component: ControlFlow,
  },
  {
    path: '**',
    component: NotFound,
  },
];
