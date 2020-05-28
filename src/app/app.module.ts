import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { MatCardModule } from '@angular/material/card';
import { CreateTicketDialogComponent } from './components/dialogs/create-ticket/create-ticket-dialog.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardComponent } from './containers/board/board.component';
import { ColumnComponent } from './components/column/column.component';
import { TicketManagementComponent } from './containers/ticket-management/ticket-management.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, TicketComponent, CreateTicketDialogComponent, BoardComponent, ColumnComponent, TicketManagementComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatCardModule,
    DragDropModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateTicketDialogComponent]
})
export class AppModule { }
