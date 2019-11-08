import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NewappComponent } from './newapp.component';
const routes: Routes = [{
  path: '',
  component: NewappComponent,
  children: [
    // {
    //   path: 'home',
    //   loadChildren: './register/register.module#registerModule',
    // },
    // {
    //   path: 'login',
    //   loadChildren: './login/login.module#loginModule',
    // },
    {
      path: 'list',
      loadChildren: './todolist/todolist.module#todolistModule',
    },
    {
      path: 'fork',
      loadChildren: './forkjoin/forkjoin.module#forkjoinModule',
    },
    {
      path: '',
      redirectTo: 'fork',
      pathMatch: 'full',
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class newappRoutingModule {
}
