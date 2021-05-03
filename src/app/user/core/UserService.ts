import {HttpClient} from '@angular/common/http';
import {UserRequest} from './payload/user.request';
import {Observable} from 'rxjs';
import {UserResponse} from './payload/user.response';
import {environment} from '../../../environments/environment';
import {Constants} from './constants/constants';
import {ProfileRequest} from './payload/profile.request';
import {AuthRequest} from './payload/auth.request';
import {AuthResponse} from './payload/auth.response';

export class UserService {
  constructor(
    private http: HttpClient
  ) {

  }

  public register(model: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(
      environment.api
      + Constants.User.prefix,
      model
    );
  }

  public login(model: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      environment.api
      + Constants.User.auth_prefix,
      model
    );
  }

  public getProfile(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(
      environment.api
      + Constants.User.prefix
      + `/${id}`
    );
  }

  public myProfile(): Observable<UserResponse> {
    return this.http.get<UserResponse>(
      environment.api
      + Constants.User.prefix
      + Constants.User.me
    );
  }


  public editProfile(model: ProfileRequest): Observable<UserResponse> {
    return this.http.patch<UserResponse>(
      environment.api
      + Constants.User.prefix
      + Constants.User.me,
      model
    );
  }

  public availability(): Observable<UserResponse> {
    return this.http.patch<UserResponse>(
      environment.api
      + Constants.User.prefix
      + Constants.User.me
      + Constants.User.availability,
      {}
    );
  }
}
