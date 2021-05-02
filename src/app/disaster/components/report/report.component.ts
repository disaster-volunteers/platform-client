import {Component, OnInit} from '@angular/core';
import {DisasterService} from '../../core/service/disaster.service';
import {DisasterTypeResponse} from '../../core/payload/disaster-type.response';
import {DisasterRequest} from '../../core/payload/disaster.request';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'dv-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  public model: DisasterRequest = new DisasterRequest();
  public disasterTypes: DisasterTypeResponse[];

  constructor(
    private disasterService: DisasterService,
    private toastrService: ToastrService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.disasterService.getTypes()
      .subscribe(res => this.disasterTypes = res);
  }

  public setCoordinates(value: any): void {
    this.model.coordinates = value;
  }

  public getInvalid(): boolean {
    return this.model.coordinates === '' || this.model.description === '' || this.model.typeId === 0;
  }

  public setType(id: number) {
    this.model.typeId = id;
  }

  public compareToSelected(id: number) {
    return id === this.model.typeId;
  }

  public submitReport() {
    this.disasterService.report(this.model)
      .subscribe(res => {
        this.toastrService.success('Успешно сигнализиране!');
        this.router.navigate(['/']);
      }, err => {
        this.toastrService.error('Възникна грешка.');
      });
  }
}
