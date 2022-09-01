import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.css']
})
export class FirstTestComponent implements OnInit {
  displayDetails: boolean = true;
  logEvent: number = 0;
  logsArray: number[] = []; // array of numbers
  constructor() { }

  ngOnInit(): void {
  }


  toggleDetails() {
    this.displayDetails = !this.displayDetails;
  }

  logClick() {
    this.logEvent++;
    this.logsArray.push(this.logEvent);
  }
}
