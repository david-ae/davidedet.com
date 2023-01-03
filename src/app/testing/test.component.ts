import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  selectedCountryCode = 'us';
  countryCodes = ['us', 'lu', 'de', 'bs', 'br', 'pt'];

  constructor() { }

  ngOnInit() {
  }

  changeSelectedCountryCode(value: string): void {
    this.selectedCountryCode = value;
  }

}
