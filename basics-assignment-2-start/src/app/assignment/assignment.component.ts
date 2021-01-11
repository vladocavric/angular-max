import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  username = ''
  // disabledAttr = true
  
  constructor() { }

  ngOnInit(): void {
  }

  // checkUsername() {
  //   this.username !== '' ? this.disabledAttr = false : this.disabledAttr = true
  // }
  // onKeydown() {
    // this.checkUsername()
    // this.username !== '' ? this.disabledAttr = false : this.disabledAttr = true
    // if (this.username !== '') {
    //   this.disabledAttr = false
    // } else {
    //   this.disabledAttr = true
    // }
  // }
  // onRestart() {
  //   this.username = ''
    // this.checkUsername()
  // }

}
