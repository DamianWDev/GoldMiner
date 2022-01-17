import { Component, OnInit } from '@angular/core';
import { GameService } from '../GameManager/game.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

  mine() {
    const audio = new Audio('./assets/sounds/stonk.mp3');
    audio.play();
    this.gameService.mine();
  }
}
