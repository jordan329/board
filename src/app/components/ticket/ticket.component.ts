import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.sass']
})
export class TicketComponent implements OnInit {

  @Input() ticketData: Ticket;

  constructor() { }

  ngOnInit() {
  }

}
