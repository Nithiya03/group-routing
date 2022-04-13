import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from '../admin/action/action.component';
import { LoginComponent } from '../admin/login/login.component';

const routes: Routes = [
  {
  path:'admin',children:[
    {path:'action',component:ActionComponent},
    {path:'login',component:LoginComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
