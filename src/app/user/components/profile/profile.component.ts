import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/UserService';
import {UserResponse} from '../../core/payload/user.response';
import {UserRequest} from '../../core/payload/user.request';
import {ProfileRequest} from '../../core/payload/profile.request';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'dv-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public editMode = false;
  public user: UserResponse;
  public model: ProfileRequest = new ProfileRequest();

  constructor(
    private userService: UserService,
    private toastrService: ToastrService
  ) {
  }

  ngOnInit() {
    this.userService.myProfile()
      .subscribe(res => {
        this.user = res;
        this.model.name = res.name;
        this.model.description = res.decription;
      });
  }

  submit(model: ProfileRequest) {
    this.userService.editProfile(model)
      .subscribe(res => {
        this.user = res;
        this.editMode = false;
        this.toastrService.success('Успешна редакция');
      });
  }
}
