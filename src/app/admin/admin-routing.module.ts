import { AdminComponent } from './admin.component';
import { AdminInicioComponent } from './admin-inicio/admin-inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  {
    path: 'admin',
    component: AdminComponent,
    children:[
      {
        path: '',
        component: AdminInicioComponent
      }
    ]
   
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
