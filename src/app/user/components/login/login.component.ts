import {Component, OnInit} from '@angular/core';
import {AuthRequest} from '../../core/payload/auth.request';
import {UserService} from '../../core/UserService';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../shared/service/authentication.service';

@Component({
  selector: 'dv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../register/register.component.scss']
})
export class LoginComponent implements OnInit {
  public model: AuthRequest = new AuthRequest();

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router,
    public authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.model)
      .subscribe(res => {
        this.authenticationService.saveUserData(res.token, 1);

        this.userService.myProfile()
          .subscribe(profile => this.authenticationService.saveUserData(res.token, profile.id));

        this.toastrService.success('Успешен вход.');
        this.router.navigate(['/']);
      }, () => {
        this.toastrService.error('Грешка. Моля проверете валидността на данните си.');
      });
  }
}
