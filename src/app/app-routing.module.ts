import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  // { path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule) }
  // {path:"doctor",loadChildren:"./doctor/doctor.module#DoctorModule"},
  {path:'doctor',loadChildren:()=>import('src/app/doctor/doctor.module').then(m=>m.DoctorModule)},
  {path:'patient',loadChildren:()=>import('src/app/patient/patient.module').then(m=>m.PatientModule)},
  {path:'staff',loadChildren:()=>import('src/app/staff/staff.module').then(m=>m.StaffModule)},
  {path:'medical',loadChildren:()=>import('src/app/medical/medical.module').then(m=>m.MedicalModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
