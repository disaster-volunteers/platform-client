import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProfileRequest} from '../../core/payload/profile.request';

@Component({
  selector: 'dv-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  @Output()
  public submitEmitter = new EventEmitter<ProfileRequest>();

  @Input()
  public model: ProfileRequest = new ProfileRequest();

  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    this.submitEmitter.emit(this.model);
  }
}
