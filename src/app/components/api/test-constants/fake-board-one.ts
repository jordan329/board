import { TicketPriority } from "src/app/models/enums/ticket-priority";
import { Ticket } from "src/app/models/ticket";
import { v4 as uuid } from 'uuid';
import { Board } from 'src/app/models/board';

export var FakeBoardOne: Board = {
  id: uuid(),
  name:"Mockup Test Board",
  columns: [
    {
      title: 'Todo',
      tickets: [
        {
          title: "test todo title",
          description: "test todo description",
          priority: TicketPriority.Medium,
          section: "todo",
          id: uuid(),
          points: 3,
        } as Ticket,
        {
          title: "test todo title",
          description: "test todo description",
          priority: TicketPriority.Low,
          section: "todo",
          id: uuid(),
          points: 3,
        } as Ticket,
        {
          title: "test todo title",
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
          title: "test doing title",
          description: "test doing description",
          priority: TicketPriority.Medium,
          section: "doing",
          id: uuid(),
          points: 3,
        } as Ticket,
        {
          title: "test doing title",
          description: "test doing description",
          priority: TicketPriority.Low,
          section: "doing",
          id: uuid(),
          points: 3,
        } as Ticket,
        {
          title: "test doing title",
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
          title: "test done title",
          description: "test done description",
          priority: TicketPriority.Medium,
          section: "done",
          id: uuid(),
          points: 3,
        } as Ticket,
        {
          title: "test done title",
          description: "test done description",
          priority: TicketPriority.Low,
          section: "done",
          id: uuid(),
          points: 3,
        } as Ticket,
        {
          title: "test done title",
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