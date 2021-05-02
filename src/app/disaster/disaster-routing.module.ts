import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {ReportComponent} from './components/report/report.component';
import {DisastersListComponent} from './components/disasters-list/disasters-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: 'report', component: ReportComponent},
  {path: 'disasters', component: DisastersListComponent}
];

export const DisasterRouting = RouterModule.forRoot(routes);
