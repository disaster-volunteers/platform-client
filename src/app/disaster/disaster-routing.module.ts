import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {ReportComponent} from './components/report/report.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: 'report', component: ReportComponent}
];

export const DisasterRouting = RouterModule.forRoot(routes);
