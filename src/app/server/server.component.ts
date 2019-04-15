import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowServer = false;
  name = "null";

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000 );
  }

  ngOnInit() {
  }

}
