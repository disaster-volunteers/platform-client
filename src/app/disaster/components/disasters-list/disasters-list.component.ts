import { Component, OnInit } from '@angular/core';
import {DisasterResponse} from '../../core/payload/disaster.response';
import {DisasterService} from '../../core/service/disaster.service';
import {ToastrService} from 'ngx-toastr';
import {AuthenticationService} from '../../../shared/service/authentication.service';

@Component({
  selector: 'dv-disasters-list',
  templateUrl: './disasters-list.component.html',
  styleUrls: ['./disasters-list.component.scss']
})
export class DisastersListComponent implements OnInit {
  public activeDisasters: DisasterResponse[];
  public resolvedDisasters: DisasterResponse[];

  constructor(
    private disasterService: DisasterService,
    private authenticationService: AuthenticationService,
    public toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.disasterService.getAll()
      .subscribe(res => {
        this.activeDisasters = res.filter(d => !d.resolved);
        this.resolvedDisasters = res.filter(d => d.resolved);
      });
  }

  volunteer(id) {
    this.disasterService.guestVolunteer(id)
      .subscribe(res => {
        this.authenticationService.setOuterHelped(id);
        this.toastrService.success('Успешно заяви участието си. Благодарим ти!');
      });
  }
}
