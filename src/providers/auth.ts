import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Account {
  email: string;
  name?: string;
  password?: string;
}

export class User {
  id: string;
  created: string;
  ttl: number;
  userId: number;
}

export class IdentityConfirmation {
  uid: string;
  token: string;
}

export class NewPasswordContext {
  accessToken: string;
  newPassword: string;
}

// urls
const BASE = "http://localhost:3000/api/Accounts";
const LOGIN = "/login";
const LOGOUT = "/logout";
const CONFIRM = "/confirm";
const RESET = "/reset";
const SET_PASSWORD = "/reset-password";

// http params
const TOKEN = 'token';
const UID = 'uid';
const ACCESS_TOKEN = 'access_token';


@Injectable()
export class AuthProvider {

  constructor(
    public http: HttpClient
  ) { }


  // make the request for creating an account
  public createAccount(account: Account) {
    return this
      .http
      .post(BASE, account, { observe: 'response' });
  }


  // make the request to login
  public login(account: Account) {
    return this
      .http
      .post(`${BASE}${LOGIN}`, account, { observe: 'response' });
  }


  // make the logout request
  public logout(accessToken: string) {

    const params = new HttpParams()
      .set(ACCESS_TOKEN, accessToken);

    return this
      .http
      .post(`${BASE}${LOGOUT}`, {}, { params: params, observe: 'response' });
  }


  // make the request to reset the password
  public requestPasswordReset(account: Account) {
    return this
      .http
      .post(`${BASE}${RESET}`, account, { observe: 'response' });
  }


  // make the confirm email address request
  public confirm(identity: IdentityConfirmation) {

    const params = new HttpParams()
      .set(UID, identity.uid)
      .set(TOKEN, identity.token);

    return this
      .http
      .get(`${BASE}${CONFIRM}`, { params: params, observe: 'response' });
  }


  // make the set password request
  public setPassword(newPasswordContext: NewPasswordContext) {

    const params = new HttpParams()
      .set(ACCESS_TOKEN, newPasswordContext.accessToken);

    return this
      .http
      .post(`${BASE}${SET_PASSWORD}`, newPasswordContext, { params: params, observe: 'response' });
  }

}