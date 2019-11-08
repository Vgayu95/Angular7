import { NgModule } from '@angular/core';
import { loginRoutingModule, routedComponents } from './login-routing.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    loginRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ...routedComponents,
    // HomePageComponent,
  ],
})
// tslint:disable-next-line: class-name
export class loginModule { }
