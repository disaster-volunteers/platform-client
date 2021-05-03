import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRouting} from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserService} from './core/UserService';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileDataComponent } from './components/profile-data/profile-data.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent, ProfileDetailsComponent, ProfileDataComponent, ProfileEditComponent],
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
