import { Component } from '@angular/core';
import { SectionData } from './models/section-data';
import { TicketData } from './models/ticket-data';
import { TicketPriority } from './models/enums/ticket-priority';
import {v4 as uuid} from 'uuid';

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
          section:"todo",
          id:uuid(),
          points:3,
        } as TicketData, {
          title: "test todo title",
          description: "test todo description",
          priority: TicketPriority.Low,
          section:"todo",
          id:uuid(),
          points:3,
        } as TicketData, {
          title: "test todo title",
          description: "test todo description",
          priority: TicketPriority.High,
          section:"todo",
          id:uuid(),
          points:3,
        } as TicketData,]
      },
      {
        title: 'Doing',
        tickets: [{
          title: "test doing title",
          description: "test doing description",
          priority: TicketPriority.Medium,
          section:"doing",
          id:uuid(),
          points:3,
        } as TicketData, {
          title: "test doing title",
          description: "test doing description",
          priority: TicketPriority.Low,
          section:"doing",
          id:uuid(),
          points:3,
        } as TicketData, {
          title: "test doing title",
          description: "test doing description",
          priority: TicketPriority.High,
          section:"doing",
          id:uuid(),
          points:3,
        } as TicketData,]
      },
      {
        title: 'Review?',
        tickets: [{
          title: "test review title",
          description: "test review description",
          priority: TicketPriority.Medium,
          section:"review",
          id:uuid(),
          points:3,
        } as TicketData, {
          title: "test review title",
          description: "test review description",
          priority: TicketPriority.Low,
          section:"review",
          id:uuid(),
          points:3,
        } as TicketData, {
          title: "test review title",
          description: "test review description",
          priority: TicketPriority.High,
          section:"review",
          id:uuid(),
          points:3,
        } as TicketData,]
      },
      {
        title: 'Done',
        tickets: [{
          title: "test done title",
          description: "test done description",
          priority: TicketPriority.Medium,
          section:"done",
          id:uuid(),
          points:3,
        } as TicketData, {
          title: "test done title",
          description: "test done description",
          priority: TicketPriority.Low,
          section:"done",
          id:uuid(),
          points:3,
        } as TicketData, {
          title: "test done title",
          description: "test done description",
          priority: TicketPriority.High,
          section:"done",
          id:uuid(),
          points:3,
        } as TicketData,]
      }
    ];
}
