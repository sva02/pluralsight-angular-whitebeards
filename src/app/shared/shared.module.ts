import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner.component';



@NgModule({
  declarations: [
    LoadingSpinnerComponent
  ],
  exports: [
    LoadingSpinnerComponent,
    CommonModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
