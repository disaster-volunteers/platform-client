import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {ReportComponent} from './components/report/report.component';
import {DisastersListComponent} from './components/disasters-list/disasters-list.component';
import {DisasterDetailsComponent} from './components/disaster-details/disaster-details.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: 'report', component: ReportComponent},
  {path: 'disasters', component: DisastersListComponent},
  {path: 'disasters/:id', component: DisasterDetailsComponent}
];

export const DisasterRouting = RouterModule.forRoot(routes);
