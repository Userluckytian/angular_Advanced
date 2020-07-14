import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BModuleComponent } from './b-module.component';

import { CComponentComponent } from './C-component/C-component.component';
import { DComponentComponent } from './D-component/D-component.component';

import { BRouterRoutes } from './b-router.routing';

@NgModule({
  declarations: [BModuleComponent, CComponentComponent, DComponentComponent],
  imports: [
    CommonModule,
    BRouterRoutes
  ],
  exports: [
    CComponentComponent,
    DComponentComponent
  ]
})
export class BModuleModule { }
