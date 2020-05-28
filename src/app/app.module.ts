import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { MatCardModule } from '@angular/material/card';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardComponent } from './components/board/board.component';
import { ColumnComponent } from './components/column/column.component';


@NgModule({
  declarations: [
    AppComponent, TicketComponent, CreateTicketComponent, BoardComponent, ColumnComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
