import { Order } from '../utils/interfaces';
import { BurgerType } from '../utils/types';
import { Burger, Kitchen } from './Kitchen';

//* Command design pattern
export class OrderManager {
  private cook: Cook;
  private order: Order;

  constructor(cook: Cook, order: Order) {
    this.cook = cook;
    this.order = order;
  }

  public execute() {
    const burger = this.cook.prepareBurger(this.order.burger);
    if (this.order.sauce) {
      burger.addSauce(this.order.sauce);
    }
    return burger;
  }
}

export class Cook {
  public prepareBurger(type: BurgerType): Burger {
    return Kitchen.createBurger(type);
  }
}

export class Cashier {
  public takeOrder(command: OrderManager) {
    return command.execute();
  }
}
