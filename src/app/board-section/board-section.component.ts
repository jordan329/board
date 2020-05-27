import { Component, OnInit, Input } from '@angular/core';
import { TicketData } from '../models/ticket-data';
import { SectionData } from '../models/section-data';

@Component({
  selector: 'board-section',
  templateUrl: './board-section.component.html',
  styleUrls: ['./board-section.component.sass']
})
export class BoardSectionComponent implements OnInit {
  @Input() sectionData: SectionData;
  constructor() { }

  ngOnInit() {
  }

}