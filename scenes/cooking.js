// scenes/cooking.js
import Phaser from 'phaser';
import { Order } from '../utils/order';

class Cooking extends Phaser.Scene {
  constructor() {
    super('Cooking');
  }

  preload() {}

  create() {
    // Add cooking station graphics
    this.cookingStation = this.add.sprite(200, 300, 'cooking-station');

    // Add player character
    this.player = this.physics.add.sprite(400, 500, 'player');

    // Create order object
    const menuItem = new Order('Vegetable Stir Fry', 2);
    this.order = menuItem;
  }

  update(time, delta) {
    // Implement cooking mechanics (e.g., timing-based mini-game)
  }
}
