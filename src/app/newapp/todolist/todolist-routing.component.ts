import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist.component';
const routes: Routes = [{
  path: '',
  component: TodolistComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
// tslint:disable-next-line: class-name
export class todolistRoutingModule { }

export const routedComponents = [
    TodolistComponent,
];
