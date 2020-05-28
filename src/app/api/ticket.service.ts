import { Injectable } from '@angular/core';
import { FakeBoardOne } from './test-constants/fake-board-one';
import { Board } from 'src/app/models/board';
import { Column } from 'src/app/models/column';
import { Backlog, Archive } from './test-constants/fake-ticket-managment';
import { Ticket } from '../models/ticket';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor() { }

  public updateTicket() {
    console.log("hello from updateTicket")
  }

  public getBoardByName(name: String): Board {
    return FakeBoardOne;
  }

  public getTicketsInBacklog(): Column {
    return Backlog;
  }

  public getTicketsInArchive(): Column {
    return Archive;
  }

  public createTicket(ticket: Ticket) {
    //throw new Error("Method: createTicket not implemented.");
    console.log("hello from createTicket",ticket)
  }
}
