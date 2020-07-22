import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//  import {DoctorModule} from './doctor/doctor.module';
//  import {StaffModule} from './staff/staff.module';
//  import {PatientModule} from './patient/patient.module';
//  import {MedicalModule} from './medical/medical.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //  DoctorModule,
    //  MedicalModule,
    //  PatientModule,
    //  StaffModule    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
