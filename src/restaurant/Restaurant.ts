import { Order } from '../utils/interfaces';
import { Cashier, Cook, OrderManager } from './OrderManager';

//* Singleton design pattern
export class Restaurant {
  private static instance: Restaurant;
  private cook: Cook;
  private cashier: Cashier;

  private constructor() {
    this.cook = new Cook();
    this.cashier = new Cashier();
  }

  public static getInstance(): Restaurant {
    if (!Restaurant.instance) {
      Restaurant.instance = new Restaurant();
    }
    return Restaurant.instance;
  }

  public takeOrder(order: Order) {
    return this.cashier.takeOrder(new OrderManager(this.cook, order));
  }
}
