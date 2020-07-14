import { Routes, RouterModule } from '@angular/router';

import { CComponentComponent } from './C-component/C-component.component';
import { DComponentComponent } from './D-component/D-component.component';
import { BModuleComponent } from './b-module.component';



const Broutes: Routes = [
  {
    path: '',
    component: BModuleComponent,
    // children: [
    //   {
    //     path: 'ccomponent',
    //     component: CComponentComponent,
    //   },
    //   {
    //     path: 'dcomponent',
    //     component: DComponentComponent,
    //   },
    //   {
    //     path: '',  // 空路由
    //     redirectTo: 'ccomponent', // 重定向到
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: '**',  // 任意路由
    //     redirectTo: 'dcomponent', // 重定向到
    //     pathMatch: 'full'
    //   }
    // ]
  }
];

export const BRouterRoutes = RouterModule.forChild(Broutes);
