import { SiteComponent } from './site.component';
import { SiteInicioComponent } from './site-inicio/site-inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  {
    path: '',
    children: [{
      path: '',
      component:SiteInicioComponent
    }],
    component: SiteComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
