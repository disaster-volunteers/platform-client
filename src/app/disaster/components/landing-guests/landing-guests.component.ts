import {Component, OnInit} from '@angular/core';
import {DisasterService} from '../../core/service/disaster.service';
import {AuthenticationService} from '../../../shared/service/authentication.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'dv-landing-guests',
  templateUrl: './landing-guests.component.html',
  styleUrls: ['./landing-guests.component.scss']
})
export class LandingGuestsComponent implements OnInit {
  public activeDisasters = false;

  constructor(
    private disasterService: DisasterService,
    public authenticationService: AuthenticationService,
    public toastrService: ToastrService
  ) {
  }

  ngOnInit() {
    this.disasterService.getAll()
      .subscribe(res => {
        res.forEach(d => {
          if (!d.resolved) {
            this.activeDisasters = true;
          }
        });
      });
  }

  logout() {
    this.authenticationService.logout();
    this.toastrService.success('Успешен изход!');
  }
}
