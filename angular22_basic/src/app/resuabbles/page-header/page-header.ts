import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-page-header',
  styleUrl: './page-header.css',
  templateUrl: './page-header.html',
})
export class PageHeader {
  @Input() headerTitle: string = '';
  @Input() headerText: string = '';
}
