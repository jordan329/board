import { Component, OnInit, Input } from '@angular/core';
import { Column } from 'src/app/models/column';
import { TicketService } from 'src/app/api/ticket.service';
import { Board } from 'src/app/models/board';
import { Section } from 'src/app/models/constants/section';

@Component({
  selector: 'ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.sass']
})
export class TicketManagementComponent implements OnInit {
  @Input() boardData: Board;
  backlog: Column;
  archive: Column;
  staging: Column = { title: "Staging", onBoard: false, tickets: [] };

  constructor(private ticketService: TicketService) { }
  ngOnInit() {
    console.log(this.boardData)
    this.backlog = this.boardData.columns.find(x => x.title === Section.Backlog);
    this.archive = this.boardData.columns.find(x => x.title === Section.Archive);
    this.staging = this.boardData.columns.find(x => x.title === Section.Staging);
  }

}
