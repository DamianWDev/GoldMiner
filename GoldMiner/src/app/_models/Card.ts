export interface Card {
    imgUrl: string;
    title: string;
    level: number;
    income: number;
    incomeMultiplier : number;
    passiveIncome: boolean;
    cost: number;
    costMultiplier: number;
}