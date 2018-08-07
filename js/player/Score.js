import {DataStore} from '../base/DataStore.js'

export class Score {
  constructor() {
    this.ctx = DataStore.getInstance().ctx;
    this.scoreNumber = 0;
    // flag
    this.isScore = true;
  }

  draw() {
    this.ctx.font = '25px Arial';
    this.ctx.fillStyle = '#ffcbeb';
    this.ctx.fillText(
        this.scoreNumber,
        window.innerWidth / 2,
        window.innerHeight / 18,
        1000
    )
  }
}