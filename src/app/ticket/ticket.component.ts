import { Component, OnInit, Input } from '@angular/core';
import { TicketData } from '../models/ticket-data';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.sass']
})
export class TicketComponent implements OnInit {

  @Input() ticketData: TicketData;

  constructor() { }

  ngOnInit() {
  }

}
