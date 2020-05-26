import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AuthService } from '../auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA6pCt7COphMzX9qy6m5i5mSNZiQ3j27VE",
      authDomain: "mysite-3a248.firebaseapp.com",
      databaseURL: "https://mysite-3a248.firebaseio.com",
      projectId: "mysite-3a248",
      storageBucket: "mysite-3a248.appspot.com",
      messagingSenderId: "1087407430097",
      appId: "1:1087407430097:web:0d38f8a3bc30b927fee8f0"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,    
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers:[AuthService]
})
export class HomeManagerModule { }
