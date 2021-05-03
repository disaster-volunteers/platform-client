import {Component, Input, OnInit} from '@angular/core';
import {DisasterService} from '../../core/service/disaster.service';
import {AuthenticationService} from '../../../shared/service/authentication.service';
import {ToastrService} from 'ngx-toastr';
import {CurrentDisasterMapModel} from '../../core/payload/current-disaster-map.model';

@Component({
  selector: 'dv-landing-guests',
  templateUrl: './landing-guests.component.html',
  styleUrls: ['./landing-guests.component.scss']
})
export class LandingGuestsComponent implements OnInit {
  @Input()
  public activeDisasters = false;

  constructor(
    private disasterService: DisasterService,
    public authenticationService: AuthenticationService,
    public toastrService: ToastrService
  ) {
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.toastrService.success('Успешен изход!');
  }
}
