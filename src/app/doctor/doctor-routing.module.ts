import { DocContactComponent } from './doc-contact/doc-contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DocHomeComponent} from './doc-home/doc-home.component';
import {DocPrescComponent} from './doc-presc/doc-presc.component';
import {DocQualComponent} from './doc-qual/doc-qual.component';

const routes: Routes = [
  {path:"",component:DocHomeComponent,children:[
    {path:'docPresc',component:DocPrescComponent},//will go to routeroutlet inside doc-home
    {path:'docQual',component:DocQualComponent},
    
  ]},
  

 
  {path:"docContact",component:DocContactComponent},//will go to parent routeroutlet- inside app-compnen.thml
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }