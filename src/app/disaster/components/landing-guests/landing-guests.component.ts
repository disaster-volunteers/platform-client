import {Component, OnInit} from '@angular/core';
import {DisasterService} from '../../core/service/disaster.service';

@Component({
  selector: 'dv-landing-guests',
  templateUrl: './landing-guests.component.html',
  styleUrls: ['./landing-guests.component.scss']
})
export class LandingGuestsComponent implements OnInit {
  public activeDisasters = false;

  constructor(
    private disasterService: DisasterService
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

  isAuthenticated() {
    return localStorage.getItem('token') !== undefined;
  }

  logout() {
    localStorage.clear();
  }
}
