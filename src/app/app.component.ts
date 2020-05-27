import { Component } from '@angular/core';
import { SectionData } from './models/section-data';
import { TicketData } from './models/ticket-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public boardData: Array<SectionData> =
    [
      {
        title: 'todo',
        tickets: [{
          title: "test todo title",
          description: "test todo description",
        } as TicketData]
      },
      {
        title: 'doing',
        tickets: [{
          title: "test doing title",
          description: "test doing description",
        } as TicketData]
      },
      {
        title: 'review?',
        tickets: [{
          title: "test review title",
          description: "test review description",
        } as TicketData]
      },
      {
        title: 'done',
        tickets: [{
          title: "test done title",
          description: "test done description",
        } as TicketData]
      }
    ];
}
