import { Visualization } from "./view.mjs";

export class Balls {
   constructor(quantityOfBalls) {
      this.quantityOfBalls = quantityOfBalls;
      this.ballsArray = [];
      this.createBalls();
   }

   createBalls () {
         this.ballsArray = [];
         let ballsOnScreen = 0;
         this.quantityOfBalls <= 100 ? ballsOnScreen = this.quantityOfBalls : ballsOnScreen = 100;
         for (let i = 0; i < ballsOnScreen; i++) {
            this.ballsArray.push(new Visualization(canvas));
         }
   }

   handleBalls() {
      this.ballsArray.forEach((ball) => {
         ball.renderCircle();
         ball.circleMove();
      })
   }
  
}

