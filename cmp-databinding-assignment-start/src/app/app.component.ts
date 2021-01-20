import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameElements = [];

  intervalStarted(count) {
    if (count.num % 2 === 0) {
      this.gameElements.push({
        game: 'even',
        num: count.num
      });
    } else if (count.num % 2 === 1) {
        this.gameElements.push({
          game: 'odd',
          num: count.num
        });
    }
  }
}
