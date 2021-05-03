export class AuthenticationService {
  public saveUserData(token: string, userId: number) {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId + '');
  }

  public isAuthenticated() {
    return localStorage.getItem('token');
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public getId() {
    return localStorage.getItem('userId');
  }

  public setOuterHelped(disasterId: number) {
    localStorage.setItem(disasterId + '', 'true');
  }

  public getHelpingData(disasterId: number) {
    return localStorage.getItem(disasterId + '') === 'true';
  }

  public logout() {
    localStorage.clear();
  }
}
