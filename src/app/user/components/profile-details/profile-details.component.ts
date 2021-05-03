import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserResponse} from '../../core/payload/user.response';

@Component({
  selector: 'dv-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  @Output() public editEmitter = new EventEmitter();
  @Input() public user: UserResponse;

  constructor() {
  }

  ngOnInit() {
  }

}
