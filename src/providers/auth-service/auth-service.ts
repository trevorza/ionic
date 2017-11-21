import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  public login(){
    localStorage.setItem('logged_in', '1');
  }

  public logout(){
    localStorage.clear();
  }

  public authenticated() {
    const logged = localStorage.getItem('logged_in');
    return logged == '1';
  };

}
