import {Component, OnInit, EventEmitter, Output} from '@angular/core';



@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  count = 1;
  num = 0;
  @Output() intervalStarted = new EventEmitter<{num: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  setInterval() {
    this.count = setInterval(() => {
      this.num++;
      // console.log(this.num);
      this.intervalStarted.emit ({num: this.num});
      }, 1000);
    // console.log(this.interval);
  }

  stopInterval() {
    clearInterval(this.count);
    console.log('interval cleared');
  }
}
