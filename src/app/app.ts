import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from "./components/data-binding/data-binding";
import { Variables } from "./components/variables/variables";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBinding, Variables],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular22');
}
