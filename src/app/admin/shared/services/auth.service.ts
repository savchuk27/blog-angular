import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FbAuthResponse, User} from '../interfaces';
import {Observable, pipe} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient){
  }

  get token(): string {
    return '';
  }
  // tslint:disable-next-line:typedef
  login(user: User): Observable<any> {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
    .pipe(
      tap(this.setToken)
    );
  }

  // tslint:disable-next-line:typedef
  logout(response){
    console.log(response);

  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  // tslint:disable-next-line:typedef
  private setToken(response: FbAuthResponse){
    console.log(response);
  }

}
