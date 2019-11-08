import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
  { path: 'home',
  loadChildren: './home/home.module#homeModule',
  },
  { path: 'register',
  loadChildren: './register/register.module#registerModule',
  },
  { path: 'login',
  loadChildren: './login/login.module#loginModule',
  },
  { path: 'newapp',
  loadChildren: './newapp/newapp.module#newappModule',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
