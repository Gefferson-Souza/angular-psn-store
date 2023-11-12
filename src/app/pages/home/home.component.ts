import { Component, OnInit } from '@angular/core';
import { gamesData } from '../../data/data';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  games: Game[] = gamesData;

  constructor() { }

  ngOnInit(): void {
  }

}
