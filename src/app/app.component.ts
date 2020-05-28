import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  components: string[] = ['Board', 'Ticket Management'];
  displayingComponent: string = this.components[0];

  onChange(e) {
    this.displayingComponent = e.value
  }
}