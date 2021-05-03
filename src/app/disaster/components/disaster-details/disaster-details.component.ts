import {Component, OnInit} from '@angular/core';
import {DisasterResponse} from '../../core/payload/disaster.response';
import {DisasterRequest} from '../../core/payload/disaster.request';
import {DisasterService} from '../../core/service/disaster.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';
import {EssentialsRequest} from '../../core/payload/essentials.request';
import {FinalMessageRequest} from '../../core/payload/final-message.request';
import {AuthenticationService} from '../../../shared/service/authentication.service';

@Component({
  selector: 'dv-disaster-details',
  templateUrl: './disaster-details.component.html',
  styleUrls: ['./disaster-details.component.scss']
})
export class DisasterDetailsComponent implements OnInit {
  public disaster: DisasterResponse;
  public essentialsModel: EssentialsRequest = new EssentialsRequest();
  public finalMessageModel: FinalMessageRequest = new FinalMessageRequest();
  public essentials = false;

  constructor(
    private disasterService: DisasterService,
    private toastrService: ToastrService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getDisaster();
  }

  getDisaster() {
    this.disasterService.getOneById(this.route.snapshot.params.id)
      .subscribe(res => {
        this.disaster = res;
        this.essentialsModel.essentials = res.essentials;
      });
  }

  saveEssentials() {
    this.disasterService.essentials(this.route.snapshot.params.id, this.essentialsModel)
      .subscribe(() => {
        this.toastrService.success('Успешно добавена информация.');
        this.disaster.essentials = this.essentialsModel.essentials;
        this.essentials = false;
      }, () => {
        this.toastrService.error('Грешка. Моля прверете валидността на данните си.');
      });
  }

  hasVolunteered() {
    return this.disaster.volunteers.map(v => v.id).indexOf(+this.authenticationService.getId()) !== -1;
  }

  volunteer() {
    this.disasterService.volunteer(this.disaster.id)
      .subscribe(res => {
        this.toastrService.success('Успешно се присъедини.');
        this.getDisaster();
      }, () => {
        this.toastrService.error('Възникна грешка.');
      });
  }

  resolve() {
    this.disasterService.resolve(this.disaster.id, this.finalMessageModel)
      .subscribe(() => {
        this.toastrService.success('Бедствието е добавено към архива');
        this.getDisaster();
      }, () => {
        this.toastrService.error('Възникна грешка.');
      });
  }
}
