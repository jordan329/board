import { Column } from 'src/app/models/column';
import { TicketPriority } from 'src/app/models/enums/ticket-priority';
import { Ticket } from 'src/app/models/ticket';
import { v4 as uuid } from 'uuid';

export var Backlog: Column = {
  title: "Backlog",
  tickets: [
    {
      title: "test Backlog title 5fffffffffffffffffffffffffffffffffff",
      description: "test doing description more realistice that it could be long... I mean this is supposed to look good no matter whata;lsfjka;lskdjf;aslkdjf",
      priority: TicketPriority.Low,
      section: "Backlog",
      id: uuid(),
      points: 3,
    } as Ticket,
    {
      title: "test Backlog title 6",
      description: "test doing description",
      priority: TicketPriority.High,
      section: "Backlog",
      id: uuid(),
      points: 3,
    } as Ticket,
  ]
};

export var Archive: Column = {
  title: "Archive",
  tickets: [
    {
      title: "test Archive title 5fffffffffffffffffffffffffffffffffff",
      description: "test doing description more realistice that it could be long... I mean this is supposed to look good no matter whata;lsfjka;lskdjf;aslkdjf",
      priority: TicketPriority.Low,
      section: "Archive",
      id: uuid(),
      points: 3,
    } as Ticket,
    {
      title: "test Archive title 6",
      description: "test doing description",
      priority: TicketPriority.High,
      section: "Archive",
      id: uuid(),
      points: 3,
    } as Ticket,
  ]
};