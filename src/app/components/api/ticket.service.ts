import { Injectable } from '@angular/core';
import { FakeBoardOne } from './test-constants/fake-board-one';
import { Board } from 'src/app/models/board';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor() { }

  public updateTicket() {
    throw new Error("Method: updateTicket not implemented.");
  }
  public getBoardByName(name: String):Board {
    return FakeBoardOne;
  }
}
