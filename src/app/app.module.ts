import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { BoardSectionComponent } from './components/board-section/board-section.component';
import { MatCardModule } from '@angular/material/card';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';


@NgModule({
  declarations: [
    AppComponent, TicketComponent, BoardSectionComponent, CreateTicketComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
