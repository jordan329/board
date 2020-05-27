import { Component } from '@angular/core';
import { SectionData } from './models/section-data';
import { TicketData } from './models/ticket-data';
import { TicketPriority } from './models/enums/ticket-priority';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public boardData: Array<SectionData> =
    [
      {
        title: 'Todo',
        tickets: [{
          title: "test todo title",
          description: "test todo description",
          priority: TicketPriority.Medium,
          points:3,
        } as TicketData, {
          title: "test todo title",
          description: "test todo description",
          priority: TicketPriority.Low,
          points:3,
        } as TicketData, {
          title: "test todo title",
          description: "test todo description",
          priority: TicketPriority.High,
          points:3,
        } as TicketData,]
      },
      {
        title: 'Doing',
        tickets: [{
          title: "test doing title",
          description: "test doing description",
          priority: TicketPriority.Medium,
          points:3,
        } as TicketData, {
          title: "test doing title",
          description: "test doing description",
          priority: TicketPriority.Low,
          points:3,
        } as TicketData, {
          title: "test doing title",
          description: "test doing description",
          priority: TicketPriority.High,
          points:3,
        } as TicketData,]
      },
      {
        title: 'Review?',
        tickets: [{
          title: "test review title",
          description: "test review description",
          priority: TicketPriority.Medium,
          points:3,
        } as TicketData, {
          title: "test review title",
          description: "test review description",
          priority: TicketPriority.Low,
          points:3,
        } as TicketData, {
          title: "test review title",
          description: "test review description",
          priority: TicketPriority.High,
          points:3,
        } as TicketData,]
      },
      {
        title: 'Done',
        tickets: [{
          title: "test done title",
          description: "test done description",
          priority: TicketPriority.Medium,
          points:3,
        } as TicketData, {
          title: "test done title",
          description: "test done description",
          priority: TicketPriority.Low,
          points:3,
        } as TicketData, {
          title: "test done title",
          description: "test done description",
          priority: TicketPriority.High,
          points:3,
        } as TicketData,]
      }
    ];
}
