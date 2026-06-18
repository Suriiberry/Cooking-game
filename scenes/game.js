// scenes/game.js
import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {}

  create() {
    // Add background image
    this.add.image(400, 300, 'background');

    // Add game elements (e.g., tables, chairs)
    this.table = this.add.sprite(200, 100, 'table');
    this.chair = this.add.sprite(300, 150, 'chair');

    // Add player character
    this.player = this.physics.add.sprite(400, 500, 'player');
  }

  update(time, delta) {}
}
