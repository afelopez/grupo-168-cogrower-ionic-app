import { Injectable } from '@angular/core';
import {Observable} from '../../node_modules/rxjs/Observable';
import { USER } from './mock-user';
import '../../node_modules/rxjs/add/operator/map';

@Injectable()
export class AuthService {
  currentUser: UserI;
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Por favor ingrese los datos de acceso");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new UserI('Simon', 'saimon@devdactic.com');
        observer.next(access);
        observer.complete();
      });
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Por favor ingrese los datos de acceso");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : UserI {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}