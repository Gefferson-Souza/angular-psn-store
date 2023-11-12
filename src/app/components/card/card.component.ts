import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  cardImg:string = '';
  @Input()
  cardLabelContent:string = '';
  @Input()
  cardConsoleType:string = '';
  @Input()
  cardGamePrice:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
