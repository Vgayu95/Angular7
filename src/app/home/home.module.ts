import { NgModule } from '@angular/core';
import { homeRoutingModule, routedComponents } from './home-routing.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { PlotlyModule } from 'angular-plotly.js';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    homeRoutingModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    PlotlyModule,
    HttpClientModule
  ],
  declarations: [
    ...routedComponents,
    // HomePageComponent,
  ],
})
// tslint:disable-next-line: class-name
export class homeModule { }
