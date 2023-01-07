import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProfileComponent } from "./profile/profile.component";
import { ExperienceComponent } from "./experience/experience.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { HttpClientModule } from "@angular/common/http";
import { ExperiencesService } from "./services/experiences.service";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ExperienceComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [ExperiencesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
