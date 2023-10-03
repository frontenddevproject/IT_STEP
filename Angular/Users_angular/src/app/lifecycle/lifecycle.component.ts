import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, DoCheck, OnDestroy {
  count: number = Math.floor(Math.random() * 100);
// -----------------
  ngOnInit() {
    console.log("first render");

    setTimeout(() => {
      this.increment();
    }, 3000)
  }

  ngDoCheck() {
    console.log("Changes performed (re-render)");
    // if(this.count >= 10) this.count = 0;
  }

  ngOnDestroy() {
    console.log("Component destroed");
  }
// --------------
  increment() {
    this.count++;
  }

}
