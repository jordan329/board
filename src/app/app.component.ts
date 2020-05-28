import { Component } from '@angular/core';
import { TicketService } from './api/ticket.service';
import { MatDialog } from '@angular/material/dialog';
import { Ticket } from 'src/app/models/ticket';
import { CreateTicketDialogComponent } from './components/dialogs/create-ticket/create-ticket-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  components: string[] = ['Board', 'Ticket Management'];
  displayingComponent: string = this.components[0];
  constructor(
    public ticketService: TicketService,
    public dialog: MatDialog
  ) { }

  onChange(e) {
    this.displayingComponent = e.value
  }

  createTicket() {
    const dialogRef = this.dialog.open(CreateTicketDialogComponent, { width: "500px" });

    dialogRef.afterClosed().subscribe((result: Ticket) => {
      this.ticketService.createTicket(result);
    });
  }
}