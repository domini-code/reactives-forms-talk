import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from '@shared/components/form/form.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'basic',
    component: FormComponent
  },
  {
    path: 'formGroup',
    loadChildren: () => import('./pages/form-group/form-group.module').then(m => m.FormGroupModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
