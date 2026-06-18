// utils/order.js (updated)
class Order {
  constructor(menuItem, quantity) {
    this.menuItem = menuItem;
    this.quantity = quantity;
    this.totalCost = this.menuItem.price * this.quantity;
  }

  get totalCost() {
    return this.totalCost;
  }
}

// scenes/game.js (updated)
import Phaser from 'phaser';
import { Order } from '../utils/order';

class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {}

  create() {
    // Add menu items
    const menuItem1 = new MenuItem('Vegetable Stir Fry', 15.99);
    const menuItem2 = new MenuItem('Grilled Cheese Sandwich', 10.99);

    // Add ordering logic
    this.orderButton = this.add.sprite(100, 100, 'order-button');
    this.orderButton.setInteractive();

    this.orderButton.on('pointerdown', () => {
      // Get selected item from menu
      const selectedItem = this.menu.items[this.menu.selectedIndex];

      // Create new order object
      const newOrder = new Order(selectedItem, 1);

      // Add to player's ticket
      this.player.ticket.push(newOrder);
    });
  }

  update(time, delta) {}
}
