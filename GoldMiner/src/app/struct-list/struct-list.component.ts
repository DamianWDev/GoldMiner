import { Component, OnInit } from '@angular/core';
import { GameService } from '../GameManager/game.service';
import { Card } from '../_models/Card';

@Component({
  selector: 'app-struct-list',
  templateUrl: './struct-list.component.html',
  styleUrls: ['./struct-list.component.css']
})
export class StructListComponent implements OnInit {
  private imgUrl: string = './assets/images'
  cards : Card[];

  constructor(public gameManager: GameService) {
    this.cards = gameManager.cards;
  }

  ngOnInit(): void {
  }

  // createOreCard(): Card {
  //   const oreCard: Card = {
  //     imgUrl: `${this.imgUrl}/goldOre.png`,
  //     title: "Gold Ore",
  //     level: 1,
  //     income: 5,
  //     incomeMultiplier: 1.5,
  //     passiveIncome: false,
  //     cost: 50,
  //     costMultiplier: 1.3
  //   }

  //   return oreCard;
  // }

  // createMinerCard(): Card {
  //   const minerCard: Card = {
  //     imgUrl: `${this.imgUrl}/miner.png`,
  //     title: "Nigger",
  //     level: 0,
  //     income: 0,
  //     incomeMultiplier: 1.25,
  //     passiveIncome: true,
  //     cost: 25,
  //     costMultiplier: 1.2
  //   }

  //   return minerCard;
  // }

}
