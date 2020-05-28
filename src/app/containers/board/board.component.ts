import { Component, OnInit, Input } from '@angular/core';
import { Board } from 'src/app/models/board';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {

  @Input() boardData: Board;
  constructor() {

  }
  ngOnInit() {
  }

}
