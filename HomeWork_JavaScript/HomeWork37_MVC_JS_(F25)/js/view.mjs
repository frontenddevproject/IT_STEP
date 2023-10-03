import { Figure} from "./model.mjs";

export class Visualization extends Figure {
   constructor (canvas, radius) {
      super(radius);
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.x = this.radius + Math.random() * (canvas.width -this.radius * 2);
      this.y = this.radius + Math.random() * (canvas.height -this.radius * 2);
      this.speedX = Math.random() * 5;
      this.speedY = Math.random() * 5;
      this.resizeWindow();
   }

   renderCircle () { 
         this.ctx.beginPath();
         this.ctx.fillStyle = `hsl(${this.x*0.5}, 100%, 50%`
         this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
         this.ctx.fill();
   }
   
   circleMove () {
      this.x += this.speedX;
      if (this.x > this.canvas.width - this.radius || this.x < this.radius) {
         this.speedX *= -1;
      }
      this.y -= this.speedY;
      if (this.y > this.canvas.height - this.radius || this.y < this.radius) {
         this.speedY *= -1;
      }
   }
   resizeWindow () {
      window.addEventListener("resize", () => {
         this.canvas.width = window.innerWidth;
         this.canvas.height = window.innerHeight;
         this.x = this.radius + Math.random() * (canvas.width -this.radius * 2);
         this.y = this.radius + Math.random() * (canvas.height -this.radius * 2);
      })
   }
}
