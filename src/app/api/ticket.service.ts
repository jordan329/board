import { Injectable } from '@angular/core';
import { Board } from 'src/app/models/board';
import { Column } from 'src/app/models/column';
import { Ticket } from '../models/ticket';
import { Tickets } from './test-constants/tickets';
import { Section } from '../models/constants/section';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor() { }

  public updateTicket() {
    console.log("hello from updateTicket")
  }

  public getBoardByName(name: string): Observable<Board> {
    var tickets = Tickets;
    var board: Board = { name: name, columns: [] };
    Section.getAll().forEach(x => board.columns.push({ title: x, onBoard: false, tickets: [] } as Column));

    tickets.forEach(x => {
      switch (x.section) {
        case Section.Backlog:
          board.columns.find(col => col.title === Section.Backlog).tickets.push(x)
          break;
        case Section.Staging:
          board.columns.find(col => col.title === Section.Staging).tickets.push(x)
          break;
        case Section.ToDo:
          var col = board.columns.find(col => col.title === Section.ToDo)
          col.onBoard = true;
          col.tickets.push(x);
          break;
        case Section.Doing:
          var col = board.columns.find(col => col.title === Section.Doing)
          col.onBoard = true;
          col.tickets.push(x);
          break;
        case Section.Done:
          var col = board.columns.find(col => col.title === Section.Done)
          col.onBoard = true;
          col.tickets.push(x);
          break;
        case Section.Archive:
          board.columns.find(col => col.title === Section.Archive).tickets.push(x)
          break;
      };
    });
    //this returns a new observable each time, we don't necessarily want to do this
    return of(board);
  }

  // public getTicketsInBacklog(): Column {
  //   return Backlog;
  // }

  // public getTicketsInArchive(): Column {
  //   return Archive;
  // }

  public createTicket(ticket: Ticket) {
    //throw new Error("Method: createTicket not implemented.");
    Tickets.push(ticket);
  }
}
