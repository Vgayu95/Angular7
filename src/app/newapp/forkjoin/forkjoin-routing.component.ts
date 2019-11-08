import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForkjoinComponent } from './forkjoin.component';
const routes: Routes = [{
  path: '',
  component: ForkjoinComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
// tslint:disable-next-line: class-name
export class forkjoinRoutingModule { }

export const routedComponents = [
    ForkjoinComponent,
];
