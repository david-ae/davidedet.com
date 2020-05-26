import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { User } from './models/user.model';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;
  constructor(private angularFireAuth: AngularFireAuth,
    private angularFireStore: AngularFirestore, private router: Router) { 
      this.user$ = this.angularFireAuth.authState.pipe(
        switchMap(user =>{
          if(user){
            return this.angularFireStore.doc<User>(`users/${user.uid}`).valueChanges();
          }else{
            return of(null);
          }
        })
      );
    }

  async googleSignin(){
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.angularFireAuth.signInWithRedirect(provider);
  }

  async signOut(){
    await this.angularFireAuth.signOut();
    return this.router.navigate(['']);
  }

  private updateUserData({ uid, email, displayName, photoURL } : User){
    //set user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.angularFireStore.doc(`users/${uid}`);
    const data = {
      uid,
      email,
      displayName,
      photoURL
    };

    return userRef.set(data, { merge: true });
  }
}
