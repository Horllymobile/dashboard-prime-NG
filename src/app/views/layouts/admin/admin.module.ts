import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ButtonModule }  from 'primeng/button';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class AdminModule { }
