// utils/order.js
class Order {
  constructor(menuItem, quantity) {
    this.menuItem = menuItem;
    this.quantity = quantity;
  }

  get totalCost() {
    return this.menuItem.price * this.quantity;
  }
}

export default Order;
