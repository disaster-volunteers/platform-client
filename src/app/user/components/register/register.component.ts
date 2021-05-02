import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/UserService';
import {UserRequest} from '../../core/payload/user.request';
import {ToastrService} from 'ngx-toastr';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'dv-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public model: UserRequest = new UserRequest();

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    this.userService.register(this.model)
      .subscribe(() => {
        this.toastrService.success('Успешна регистрация');
        this.router.navigate(['login']);
      }, () => {
        this.toastrService.error('Грешка. Моля провери дали въведените данни са валидни.');
      });
  }
}
