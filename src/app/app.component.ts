import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  count: number = 0;
  delay = 5000;
  constructor() {}

  ngOnInit() {
    const interval = setInterval(() => {
      this.count++;
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, this.delay);
  }
}
