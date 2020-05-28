import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Ticket } from 'src/app/models/ticket';
import { v4 as uuid } from 'uuid';
import { TicketPriority } from 'src/app/models/constants/ticket-priority';
import { Section } from 'src/app/models/constants/section';

@Component({
  selector: 'create-ticket-dialog',
  templateUrl: './create-ticket-dialog.component.html',
  styleUrls: ['./create-ticket-dialog.component.sass']
})
export class CreateTicketDialogComponent implements OnInit {
  ticket: Ticket;

  title: string = "";
  description: string = "";
  id: string = "";
  points: number = 0;
  priority: string = TicketPriority.Low;
  section: string = Section.Backlog;

  sections = Section.getAll();
  priorities = TicketPriority.getAll();
  constructor(
    public dialogRef: MatDialogRef<CreateTicketDialogComponent>,

  ) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.dialogRef.close();
  }

  onCreate() {
    this.ticket = {
      title: this.title,
      description: this.description,
      id: this.id,
      points: this.points,
      priority: this.priority,
      section: this.section,
    }
    console.log(this.ticket)
    this.dialogRef.close(this.ticket);
  }
}
/*
Ticket {
  description?: string;
  title: string;
  points?: number;
  priority?: TicketPriority;
  type?: TicketType;
  section: string;
  id: uuid;
  dateLateChanged?:Date;
}
*/