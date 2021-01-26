import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase'




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(
    public afAuth: AngularFireAuth
  ) { }


  async login( email: string, password: string ){
    const result = await this.afAuth.signInWithEmailAndPassword(email, password);  
    console.info(result);  
    return result;
  }
  
  async register( email: string, password: string ){
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    console.info(result);
    return result;
  }

  async logout(){
    await this.afAuth.signOut();
  }

  async loginGoogle(){
    const result = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider );
    console.info(result);
    return result;
  }

}
