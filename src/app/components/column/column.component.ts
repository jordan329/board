import { Component, OnInit, Input } from '@angular/core';
import { Column } from 'src/app/models/column';

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.sass']
})
export class ColumnComponent implements OnInit {

  @Input() sectionData: Column;
  constructor() { }

  ngOnInit() {
  }
}
