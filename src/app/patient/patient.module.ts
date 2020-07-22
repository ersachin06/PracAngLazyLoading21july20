import { PatientRoutingModule } from './patient-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientHomeComponent } from './patient-home/patient-home.component';



@NgModule({
  declarations: [PatientHomeComponent],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
