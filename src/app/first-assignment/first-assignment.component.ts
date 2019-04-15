import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-assignment',
  templateUrl: './first-assignment.component.html',
  styleUrls: ['./first-assignment.component.css']
})
export class FirstAssignmentComponent implements OnInit {

  username = '';
  isDisplay = true;
  numOfClicks = [];
  constructor() { }

  ngOnInit() {
  }
  toggleDisplay()
  {
    if (this.isDisplay) {
      this.isDisplay = false;
    } else {
      this.isDisplay = true;
    }
    this.numOfClicks.push(this.numOfClicks.length + 1 );

  }
}
