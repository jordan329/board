import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { MatCardModule } from '@angular/material/card';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardComponent } from './containers/board/board.component';
import { ColumnComponent } from './components/column/column.component';
import { TicketManagementComponent } from './containers/ticket-management/ticket-management.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent, TicketComponent, CreateTicketComponent, BoardComponent, ColumnComponent, TicketManagementComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatCardModule,
    DragDropModule,
    MatRadioModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
