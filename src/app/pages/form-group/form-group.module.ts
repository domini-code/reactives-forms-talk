import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormGroupRoutingModule } from './form-group-routing.module';
import { FormGroupComponent } from './form-group.component';


@NgModule({
  declarations: [FormGroupComponent],
  imports: [
    CommonModule,
    FormGroupRoutingModule
  ]
})
export class FormGroupModule { }
