import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService],
})
export class AppComponent {
  columns: string[];

  constructor(public data: DataService) {
    this.columns = ['name', ...data.modes];
  }
}
