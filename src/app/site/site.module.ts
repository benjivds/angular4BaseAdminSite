import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { SiteInicioComponent } from './site-inicio/site-inicio.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule
  ],
  declarations: [ SiteComponent, SiteInicioComponent, SiteHeaderComponent, SiteFooterComponent]
})
export class SiteModule { }
