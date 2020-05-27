import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { BoardSectionComponent } from './board-section/board-section.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent, TicketComponent, BoardSectionComponent
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
