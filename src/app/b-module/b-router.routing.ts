import { Routes, RouterModule } from '@angular/router';

import { CComponentComponent } from './C-component/C-component.component';
import { DComponentComponent } from './D-component/D-component.component';



const Broutes: Routes = [
  {
    path: '',
    component: CComponentComponent,
    children: [
      {
        path: 'ccomponent',
        component: CComponentComponent,
      },
      {
        path: 'dcomponent',
        component: DComponentComponent,
      },
      {
        path: '',  // 空路由
        redirectTo: 'ccomponent', // 重定向到
        pathMatch: 'full'
      },
      {
        path: '**',  // 任意路由
        component: DComponentComponent
      }
    ]
  }
];

export const BRouterRoutes = RouterModule.forChild(Broutes);
