import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRouting} from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserService} from './core/UserService';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  providers: [
    UserService
  ],
  imports: [
    CommonModule,
    UserRouting,
    HttpClientModule,
    FormsModule,
  ]
})
export class UserModule { }
