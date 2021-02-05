import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRouteModule } from './views/layouts/admin/admin.route.module';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},

  {
    path: 'dashboard',
    children:[
    {
        path: '',
      loadChildren: './layouts/admin/admin.module#AdminModule'
    }
    ]
  },

  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [
    AdminRouteModule,
    RouterModule.forRoot(
      routes,
      //{useHash: true}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
