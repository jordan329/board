import { Component, OnInit, OnDestroy } from '@angular/core';
import { TicketService } from './api/ticket.service';
import { MatDialog } from '@angular/material/dialog';
import { Ticket } from 'src/app/models/ticket';
import { CreateTicketDialogComponent } from './components/dialogs/create-ticket/create-ticket-dialog.component';
import { Board } from './models/board';
import { Subscription } from 'rxjs';
import { Section } from './models/constants/section';
import { Column } from './models/column';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  components: string[] = ['Board', 'Ticket Management'];
  board: Board;
  ticketManagement: Board;
  displayingComponent: string = this.components[0];
  boardSub: Subscription;
  constructor(
    public ticketService: TicketService,
    public dialog: MatDialog
  ) { }
  ngOnDestroy(): void {
    this.boardSub.unsubscribe();
  }
  ngOnInit(): void {
    this.boardSub = this.ticketService.getBoardByName("test").subscribe(x => {
      this.ticketManagement = { ...x };
      var filteredColumns:Array<Column> = []
      x.columns.forEach(col => { if (col.onBoard) { filteredColumns.push({ ...col }) } })
      this.board = {
        name: x.name,
        columns: filteredColumns
      }
    })
  }

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