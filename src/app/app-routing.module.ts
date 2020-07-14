import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'amodule',
    loadChildren: './a-module/a-module.module#AModuleModule',
  },
  {
    path: 'bmodule',
    loadChildren: './b-module/b-module.module#BModuleModule',
  },
  { path: '', redirectTo: 'amodule', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
