import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRouting} from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    UserRouting
  ]
})
export class UserModule { }
