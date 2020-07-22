import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientHomeComponent} from './patient-home/patient-home.component';

const routes: Routes = [
  {path:"",component:PatientHomeComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }