import { Component, OnInit } from '@angular/core';
import { GameService } from '../GameManager/game.service';

@Component({
  selector: 'app-game-hub',
  templateUrl: './game-hub.component.html',
  styleUrls: ['./game-hub.component.css']
})
export class GameHubComponent implements OnInit {
  money: number = 0;

  constructor(public gameService: GameService) {
    gameService.moneySource.subscribe(money => this.money = money);
  }

  ngOnInit(): void {
  }

}
