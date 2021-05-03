import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationService} from './service/authentication.service';

@NgModule({
  declarations: [],
  providers: [
    AuthenticationService
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
