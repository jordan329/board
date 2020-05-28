import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/models/column';
import { TicketService } from 'src/app/api/ticket.service';

@Component({
  selector: 'ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.sass']
})
export class TicketManagementComponent implements OnInit {
  backlog: Column;
  archive: Column;
  staging: Column = { title: "Staging", tickets: [] };

  constructor(private ticketService: TicketService) { }
  ngOnInit() {
    this.backlog = this.ticketService.getTicketsInBacklog();
    this.archive = this.ticketService.getTicketsInArchive();
  }

}
