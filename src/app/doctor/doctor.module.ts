import { DoctorRoutingModule } from './doctor-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocHomeComponent } from './doc-home/doc-home.component';
import { DocQualComponent } from './doc-qual/doc-qual.component';
import { DocPrescComponent } from './doc-presc/doc-presc.component';
import { DocContactComponent } from './doc-contact/doc-contact.component';



@NgModule({
  declarations: [DocHomeComponent, DocQualComponent, DocPrescComponent, DocContactComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
//how we removed error of warning : Experimental support for decorators is a feature that is subject to change in a future release
//File -> preferences -> setings -> user -> serach decorator
// javascript : implicit project config : ExperimentalDecorator - is par check box ka mark lagaya - toh ye errro chala gaya

export class DoctorModule { }
