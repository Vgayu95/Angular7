import { NgModule } from '@angular/core';
import { forkjoinRoutingModule, routedComponents } from './forkjoin-routing.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    forkjoinRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot ({
      apiKey: 'AIzaSyD2cSLE5pA3XRDrhJOLXY1fqijBvIV97kE'
    })
  ],
  declarations: [
    ...routedComponents,
    // HomePageComponent,
  ],
})
// tslint:disable-next-line: class-name
export class forkjoinModule { }
