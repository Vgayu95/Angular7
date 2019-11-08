import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
const routes: Routes = [{
  path: '',
  component: RegisterComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
// tslint:disable-next-line: class-name
export class registerRoutingModule { }

export const routedComponents = [
    RegisterComponent,
];
