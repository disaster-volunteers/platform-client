import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingGuestsComponent} from './components/landing-guests/landing-guests.component';
import {MapComponent} from './components/map/map.component';
import {AgmCoreModule} from '@agm/core';
import {DisasterRouting} from './disaster-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { ReportComponent } from './components/report/report.component';
import {DisasterService} from './core/service/disaster.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { DisastersListComponent } from './components/disasters-list/disasters-list.component';
import { DisasterSingleComponent } from './components/disaster-single/disaster-single.component';
import { DisasterDetailsComponent } from './components/disaster-details/disaster-details.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    LandingGuestsComponent,
    MapComponent,
    LandingComponent,
    ReportComponent,
    DisastersListComponent,
    DisasterSingleComponent,
    DisasterDetailsComponent
  ],
  providers: [
    DisasterService
  ],
  imports: [
    DisasterRouting,
    CommonModule,
    HttpClientModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDS9q2bfOep2OlZCFWgW9KaCsIHopKo354',
      libraries: ['places']
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ]
})
export class DisasterModule {
}
