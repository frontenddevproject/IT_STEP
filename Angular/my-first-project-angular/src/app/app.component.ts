import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-first-project-angular';

  user = {name: "Alex", age: 36};

  counter: number = 0;

  numbers: Array<number> = [1, 2, 3, 4, 5 ,6]

  increment() {
    this.counter = this.counter + 10;
  }

  decrement() {
    this.counter = this.counter - 10;
  }
  clearCounter() {
    this.counter = 0;
  }
}
