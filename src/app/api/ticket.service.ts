import { Injectable } from '@angular/core';
import { FakeBoardOne } from './test-constants/fake-board-one';
import { Board } from 'src/app/models/board';
import { Column } from 'src/app/models/column';
import { Backlog, Archive } from './test-constants/fake-ticket-managment';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor() { }

  public updateTicket() {
    throw new Error("Method: updateTicket not implemented.");
  }

  public getBoardByName(name: String): Board {
    return FakeBoardOne;
  }

  public getTicketsInBacklog(): Column {
    console.log(Backlog)
    return Backlog;
  }

  public getTicketsInArchive(): Column {
    console.log(Archive)
    return Archive;
  }
}
