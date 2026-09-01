import { Routes } from '@angular/router';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-binding/data-binding';
import { DirectiveExp } from './components/directive-exp/directive-exp';
import { NotFound } from './components/not-found/not-found';
import { ControlFlow } from './components/control-flow/control-flow';
import { TemForm } from './components/tem-form/tem-form';
import { ReactiveFormEx } from './components/reactive-form-ex/reactive-form-ex';
import { SignalBasic } from './components/signal-basic/signal-basic';
import { SignalFormEx } from './components/signal-form-ex/signal-form-ex';
import { GetAPIEx } from './components/get-apiex/get-apiex';
import { ClientCrud } from './components/client-crud/client-crud';
import { PipeEx } from './components/pipe-ex/pipe-ex';

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
    path: 'template-form',
    component: TemForm,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormEx,
  },
  {
    path: 'signal-basic',
    component: SignalBasic,
  },
  {
    path: 'signal-form',
    component: SignalFormEx,
  },
  {
    path: 'get-api',
    component: GetAPIEx,
  },
  {
    path: 'client-crud',
    component: ClientCrud,
  },
  {
    path: 'pipe',
    component: PipeEx,
  },
  {
    path: '**',
    component: NotFound,
  },
];
