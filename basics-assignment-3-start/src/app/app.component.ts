import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicks = 0
  isOdd = false
  clicksArr = []
  showSecret = false

  // constructor() {
  //   this.clicks
  // }
  onClick() {
    this.clicks++
    this.clicks % 2 === 0 ? this.isOdd = false : this.isOdd = true
    this.clicksArr.push({click: this.clicks, time: new Date(), timeStamp: Date.now(), style: this.clicks > 5 ? true : false})
    this.clicksArr
  }
}
