import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DisasterResponse} from '../../core/payload/disaster.response';
import {AuthenticationService} from '../../../shared/service/authentication.service';

@Component({
  selector: 'dv-disaster-single',
  templateUrl: './disaster-single.component.html',
  styleUrls: ['./disaster-single.component.scss']
})
export class DisasterSingleComponent implements OnInit {
  @Output() public volunteerEmitter = new EventEmitter<number>();
  @Input() public disaster: DisasterResponse;

  constructor(
    public authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {

  }

  volunteer() {
    this.volunteerEmitter.emit(this.disaster.id);
    this.disaster.outerHelp++;
  }
}
