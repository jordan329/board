import { TicketPriority } from "src/app/models/enums/ticket-priority";
import { Ticket } from "src/app/models/ticket";
import { v4 as uuid } from 'uuid';
import { Board } from 'src/app/models/board';

export var FakeBoardOne: Board = {
  id: uuid(),
  name:"Mockup Test Board Name",
  columns: [
    {
      title: 'Todo',
      tickets: [
        {
          title: "test todo title 1",
          description: "test todo description",
          priority: TicketPriority.Medium,
          section: "todo",
          id: uuid(),
          points: 3,
        } as Ticket,
        {
          title: "test todo title 2",
          description: "test todo description",
          priority: TicketPriority.Low,
          section: "todo",
          id: uuid(),
          points: 3,
        } as Ticket,
        {
          title: "test todo title 3",
          description: "test todo description",
          priority: TicketPriority.High,
          section: "todo",
          id: uuid(),
          points: 3,
        } as Ticket,
      ]
    },
    {
      title: 'Doing',
      tickets: [
        {
          title: "test doing title 4",
          description: "test doing description",
          priority: TicketPriority.Medium,
          section: "doing",
          id: uuid(),
          points: 3,
        } as Ticket,
        {
          title: "test doing title 5fffffffffffffffffffffffffffffffffff",
          description: "test doing description more realistice that it could be long... I mean this is supposed to look good no matter whata;lsfjka;lskdjf;aslkdjf",
          priority: TicketPriority.Low,
          section: "doing",
          id: uuid(),
          points: 3,
        } as Ticket,
        {
          title: "test doing title 6",
          description: "test doing description",
          priority: TicketPriority.High,
          section: "doing",
          id: uuid(),
          points: 3,
        } as Ticket,
      ]
    },
    {
      title: 'Done',
      tickets: [
        {
          title: "test done title 7",
          description: "test done description",
          priority: TicketPriority.Medium,
          section: "done",
          id: uuid(),
          points: 3,
        } as Ticket,
        {
          title: "test done title 8",
          description: "test done description",
          priority: TicketPriority.Low,
          section: "done",
          id: uuid(),
          points: 3,
        } as Ticket,
        {
          title: "test done title 9",
          description: "test done description",
          priority: TicketPriority.High,
          section: "done",
          id: uuid(),
          points: 3,
        } as Ticket,
      ]
    }
  ]
}