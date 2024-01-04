import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register.component';
import { SignInComponent } from './sign-in.component';



@NgModule({
  declarations: [
    RegisterComponent,
    SignInComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class UsersModule { }
