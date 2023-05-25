import { BurgerType, SauceType } from "./types";

export interface Order {
  burger: BurgerType;
  sauce?: SauceType;
}
