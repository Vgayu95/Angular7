import { NgModule } from '@angular/core';
import { registerRoutingModule, routedComponents } from './register-routing.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
@NgModule({
  imports: [
    registerRoutingModule,
    FormsModule,
    CommonModule,
    MatCardModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
// tslint:disable-next-line: class-name
export class registerModule { }
