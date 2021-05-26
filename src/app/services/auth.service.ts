import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {
  }

  async logout(): Promise<void> {
    await this.afAuth.signOut();
  }

  login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  authenticated(): boolean {
    return this.afAuth.authState !== null;
  }

  // tslint:disable-next-line: typedef
  updateUser(name: string) {
    return this.afAuth.currentUser.then((user) => {
      // @ts-ignore: Object is possibly 'null'.
      return user.updateProfile({
        displayName: name
      });
    });
  }

  // tslint:disable-next-line: typedef
  createUser(email: string, password: string, name?: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password).then((result) => {
      if (name) {
        this.updateUser(name);
      }
      return result.user;
    });
  }
}
