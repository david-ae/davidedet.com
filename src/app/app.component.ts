import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./../assets/css/split.css", "./app.component.css"],
})
export class AppComponent implements OnInit {
  currentDate: string;

  ngOnInit() {
    this.currentDate = new Date().getFullYear().toString();
  }
}
