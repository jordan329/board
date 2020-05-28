import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board';
import { TicketService } from '../../components/api/ticket.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {

  public boardData:Board;
  constructor(private ticketService: TicketService) {

  }
  ngOnInit() {
    this.boardData = this.ticketService.getBoardByName("doesn't matter yet we only have fake data");
  }

}
