import {Component, OnInit} from '@angular/core';
import {DisasterService} from '../../core/service/disaster.service';
import {CurrentDisasterMapModel} from '../../core/payload/current-disaster-map.model';
import has = Reflect.has;

@Component({
  selector: 'dv-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public activeDisasters = false;
  public currentDisastersMap: CurrentDisasterMapModel[] = [];
  public hasChecked = false;

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

            const [lat, lon] = d.coordinates.split(', ');

            this.currentDisastersMap.push(
              new CurrentDisasterMapModel(
                +lat,
                +lon,
                'http://pngimg.com/uploads/attention/attention_PNG60.png'
              )
            );
          }
        });

        this.hasChecked = true;
      });
  }

}
