import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ActionComponent } from './action/action.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ActionComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
