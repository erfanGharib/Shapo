import { T_Product } from "../data/productData";

export const calcTotalPrice = (cartData: T_Product[]) => {
    let totalPrice = 0;
    cartData.forEach(({ price, qty }) => totalPrice += price * qty);
    return totalPrice;
}
