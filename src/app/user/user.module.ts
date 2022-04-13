import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ActionComponent } from './action/action.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ActionComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
