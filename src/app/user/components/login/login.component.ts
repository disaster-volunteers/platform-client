import {Component, OnInit} from '@angular/core';
import {AuthRequest} from '../../core/payload/auth.request';
import {UserService} from '../../core/UserService';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

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
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.model)
      .subscribe(res => {
        this.userService.saveLoginInfo(res.token);
        this.toastrService.success('Успешен вход.');
        this.router.navigate(['/']);
      }, () => {
        this.toastrService.error('Грешка. Моля проверете валидността на данните си.');
      });
  }
}
