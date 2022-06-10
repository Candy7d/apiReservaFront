import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FormCarRoutingModule } from './form-car-routing.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormCarRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class FormCarModule { }
