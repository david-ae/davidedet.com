import { Component, OnInit } from "@angular/core";
import { ExperiencesService } from "./services/experiences.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  ngOnInit() {}

  constructor(private experienceService: ExperiencesService) {
    // this.experienceService.getExperiences().subscribe((e) => console.log(e));
  }
}
