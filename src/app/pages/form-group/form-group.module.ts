import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormGroupRoutingModule } from './form-group-routing.module';
import { FormGroupComponent } from './form-group.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormGroupComponent],
  imports: [CommonModule, FormGroupRoutingModule, ReactiveFormsModule],
})
export class FormGroupModule {}
