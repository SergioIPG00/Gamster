import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { user } from '../clases/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
   }

  public isLogged: any = false;

  //login
  async onLogin(user: user){
    try
      {
        return await this.afAuth.signInWithEmailAndPassword(user.email, user.password)
      }
      catch(error)
      {
        console.log("error", error)
      }

  }

  //registro
  async onRegister(user: user){
    try
      {
        return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      }
      catch(error)
      {
        console.log("error", error)
      }
  }

}
