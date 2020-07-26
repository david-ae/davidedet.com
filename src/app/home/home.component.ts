import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./../../assets/css/split.css', './home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'davidedet';
  currentDate: string;

  constructor() { }
 
  ngOnInit() {
    this.currentDate = new Date().getFullYear().toString();
  }

}
