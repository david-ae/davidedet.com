import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Experience } from "../models/experience";

@Injectable({
  providedIn: "root",
})
export class ExperiencesService {
  constructor(private http: HttpClient) {}

  public getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>("assets/json/experiences.json");
  }
}
