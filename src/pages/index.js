import { cartOutline, heartOutline, homeOutline, shirtOutline } from "ionicons/icons";

import Categories from "./Categories";
import Cart from "./Cart";
import Favourites from "./Favourites";
import ProductType from "./ProductType";
import Category from "./Category";

export const pages = [
  {
    href: "/home",
    icon: homeOutline,
    component: Categories,
    default: true,
    isTab: true
  },
  {
    href: "/categories/:category/:type",
    icon: homeOutline,
    component: ProductType,
    default: false,
    isTab: false
  },
  {
    href: "/categories",
    icon: shirtOutline,
    component: Categories,
    default: false,
    isTab: true
  },
  {
    href: "/categories/:category",
    icon: shirtOutline,
    component: Category,
    default: true,
    isTab: false
  },
  {
    href: "/cart",
    icon: cartOutline,
    component: Cart,
    default: false,
    isTab: true
  },
  {
    href: "/favourites",
    icon: heartOutline,
    component: Favourites,
    default: false,
    isTab: true
  }
];