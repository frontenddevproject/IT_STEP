const canvas1 = document.getElementById("canvas1");
const canvas2 = document.getElementById("canvas2");

class Rectangle {
  static row = 1;
  constructor (canvas, width, height) {
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = canvas.getContext("2d");
    this.x = 0;
    this.y = 0;
    this.resizeWindow();
  }

  renderRect () {
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  changeCoordinate() {
    this.x += this.width * 2;
    if (this.x > this.canvas.width || this.x <= 0) {
      this.y += this.height;
      Rectangle.row++; 
      (Rectangle.row % 2 === 0) ? this.x = this.width : this.x = 0;
    }
  }

  handleRect () {
    let render = setInterval(()=>{
      this.renderRect();
      this.changeCoordinate(); 
      if (this.x > this.canvas.width || this.y > this.canvas.height) {
        clearInterval(render);
      }
    }, 100); 
  }

  resizeWindow() {
    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      Rectangle.row = 1;
      this.x = 0;
      this.y = 0;
    });
  }
}

const rect = new Rectangle(canvas1, 50, 50);
rect.handleRect();

class TextInCanvas {
  constructor (canvas, text) {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = canvas.getContext("2d");
    this.text = text;
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.canvas.ZIndex = "2";
    this.resizeWindow();
    this.renderText(this.x, this.y);
  }
  
  renderText (x, y) {
    this.ctx.fillStyle = "blue";
    this.ctx.strokeStyle = "red";
    this.ctx.lineWidth = 3;
    this.ctx.font = "bold 100px sans-serif";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillText(this.text, x, y);
    this.ctx.strokeText(this.text, x, y); 
  };

  resizeWindow() {
    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.x = this.canvas.width / 2;
      this.y = this.canvas.height / 2;
      this.renderText(this.x, this.y)
    })
  }
}

const text = new TextInCanvas(canvas2, "Hello World");

