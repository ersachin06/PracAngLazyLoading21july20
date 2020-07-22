import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedicalHomeComponent} from './medical-home/medical-home.component';

const routes: Routes = [
  {path:"",component:MedicalHomeComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalRoutingModule { }