// main.js
import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {}

  create() {}

  update(time, delta) {}
}

const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'gameCanvas',
  width: 800,
  height: 600,
  scene: [Game]
});
