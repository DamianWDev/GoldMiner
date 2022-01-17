import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { Card } from '../_models/Card';
import config from '../../assets/cards.json';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  money: number = 0;
  moneySource: Subject<number> = new ReplaySubject<number>(1);
  cards: Card[];
  private moneyPerClick: number = 0;
  private moneyPerSecond: number = 0;

  constructor() {
    this.loadCards();
    this.initIncomeValues();
    this.moneySource.subscribe((value) => {
      this.money = value
    });
  }

  mine() {
    console.log(this);

    this.moneySource.next(Math.floor(this.money + this.moneyPerClick));
  }

  pay(cost: number, increaseEarnings: number, passiveIncome: boolean) {
    this.moneySource.next(this.money - cost);
    if (passiveIncome) {
      if (Math.floor(increaseEarnings * this.moneyPerSecond) <= 5) this.moneyPerSecond++;
      else this.moneyPerSecond = Math.floor(increaseEarnings * this.moneyPerSecond);
    }
    else
      this.moneyPerClick = Math.floor(increaseEarnings * this.moneyPerClick);
  }

  loadCards() {
    this.cards = <Card[]>config;
    console.log(this.cards);
  }

  initIncomeValues() {
    this.cards.forEach(x => {
      if (x.passiveIncome) this.moneyPerSecond += x.income
      else this.moneyPerClick += x.income
    })
  }








  intervalId = setInterval(() => {
    this.moneySource.next(Math.floor(this.money + this.moneyPerSecond));
  }, 1000);


  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
