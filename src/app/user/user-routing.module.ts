import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from '../user/action/action.component';
import { LoginComponent } from '../user/login/login.component';

const routes: Routes = [
  {
    path:'user',children:[
      {path:'action',component:ActionComponent},
      {path:'login',component:LoginComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
