import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeManagerModule } from './home-manager/home-manager.module';
import { HomeModule } from './home/home.module';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { QuoteComponent } from './quote/quote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AboutComponent,
    SignInComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    HomeManagerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
