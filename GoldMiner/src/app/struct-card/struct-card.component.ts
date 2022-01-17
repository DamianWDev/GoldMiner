import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../GameManager/game.service';
import { Card } from '../_models/Card';

@Component({
  selector: 'app-struct-card',
  templateUrl: './struct-card.component.html',
  styleUrls: ['./struct-card.component.css']
})
export class StructCardComponent implements OnInit {
  @Input() receivedCard: Card;
  localCard: Partial<Card> = {};
  money: number = 0;

  constructor(public gameManager: GameService) {
    this.localCard = this.receivedCard;
    gameManager.moneySource.subscribe(money => this.money = money);
  }

  ngOnInit(): void {
    this.setLocalCard();
  }

  buy() {
    console.log(JSON.stringify(this.localCard));

    if (this.localCard.cost! <= this.money) {
      this.gameManager.pay(this.localCard.cost!, this.localCard.incomeMultiplier!, this.localCard.passiveIncome!);
      this.updateCard();
    }
  }

  updateCard() {
    this.localCard.cost = Math.floor(this.localCard.cost! * this.localCard.costMultiplier!);
    this.localCard.level!++;
    if (Math.floor(this.localCard.incomeMultiplier! * this.localCard.income!) <= 5) this.localCard.income!++;
    else this.localCard.income = Math.floor(this.localCard.incomeMultiplier! * this.localCard.income!);
  }

  setLocalCard() {
    this.localCard = this.receivedCard;
  }
}
