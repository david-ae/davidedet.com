import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  { path: '', redirectTo: 'home',  pathMatch:'full'},
  { path: 'sign-in', component: SignInComponent },
  { path: 'quote-aa', component: QuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
