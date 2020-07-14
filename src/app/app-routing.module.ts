import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 根组件
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'amodule',
        loadChildren: './a-module/a-module.module#AModuleModule',
      },
      {
        path: 'bmodule',
        loadChildren: './b-module/b-module.module#BModuleModule',
      },
      {path: '**',   redirectTo: 'amodule', pathMatch: 'full'} // 任意路由
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
