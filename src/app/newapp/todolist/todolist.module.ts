import { NgModule } from '@angular/core';
import { todolistRoutingModule, routedComponents } from './todolist-routing.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
@NgModule({
  imports: [
    todolistRoutingModule,
    FormsModule,
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [
    ...routedComponents,
  ],
})
// tslint:disable-next-line: class-name
export class todolistModule { }
