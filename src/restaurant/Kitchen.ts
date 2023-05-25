import { BurgerType, SauceType } from '../utils/types';

//* Factory design pattern
export class Kitchen {
  public static createBurger(type: BurgerType): Burger {
    switch (type) {
      case 'cheeseburger':
        return new CheeseBurger();
      case 'baconburger':
        return new BaconBurger();
      case 'mushroomburger':
        return new MushroomBurger();
      case 'chiliburger':
        return new ChiliBurger();
      case 'avocadoburger':
        return new AvocadoBurger();
      case 'royal':
        return new RoyalBurger();
      case 'classic':
        return new ClassicBurger();
      case 'vegetarian':
        return new VegetarianBurger();
      default:
        throw new Error('Invalid burger type');
    }
  }
}

export abstract class Burger {
  public abstract getDescription(): string;

  public addSauce(sauce: SauceType): Burger {
    return new SauceDecorator(this, sauce);
  }
}

class CheeseBurger extends Burger {
  public getDescription(): string {
    return 'Cheeseburger';
  }
}

class BaconBurger extends Burger {
  public getDescription(): string {
    return 'Baconburger';
  }
}

class MushroomBurger extends Burger {
  public getDescription(): string {
    return 'Mushroomburger';
  }
}

class ChiliBurger extends Burger {
  public getDescription(): string {
    return 'Chiliburger';
  }
}

class AvocadoBurger extends Burger {
  public getDescription(): string {
    return 'Avocadoburger';
  }
}

class RoyalBurger extends Burger {
  public getDescription(): string {
    return 'Royal Burger';
  }
}

class ClassicBurger extends Burger {
  public getDescription(): string {
    return 'Classic Burger';
  }
}

class VegetarianBurger extends Burger {
  public getDescription(): string {
    return 'Vegetarian Burger';
  }
}

//* Decorator design pattern
export class SauceDecorator extends Burger {
  private burger: Burger;
  private sauce: SauceType;

  constructor(burger: Burger, sauce: SauceType) {
    super();
    this.burger = burger;
    this.sauce = sauce;
  }

  public getDescription(): string {
    return `${this.burger.getDescription()} with ${this.sauce} sauce`;
  }
}
