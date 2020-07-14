import { Routes, RouterModule } from '@angular/router';


// TODO:4:构建路由跳转需要引入我们要跳转的组件！！！
import { AComponentComponent } from './A-component/A-component.component';
import { BComponentComponent } from './B-component/B-component.component';
import { AModuleComponent } from './a-module.component';

// TODO:5:修改内部配置（最初加载的时候，路由指向到这里，默认加载A组件内容）
const Aroutes: Routes = [
  {
    path: '',
    component: AModuleComponent,
    // children: [
      //   {
      //     path: 'acomponent',
      //     component: AComponentComponent,
      //   },
      //   {
      //     path: 'bcomponent',
      //     component: BComponentComponent,
      //   },
      // {
      //   path: '',  // 空路由
      //   redirectTo: 'acomponent', // 重定向到
      //   pathMatch: 'full'
      // },
      // {
      //   path: '**',  // 任意路由
      //   redirectTo: 'bcomponent', // 重定向到
      //   pathMatch: 'full'
      // }
    // ]
  }
];

export const ARouterRoutes = RouterModule.forChild(Aroutes);
