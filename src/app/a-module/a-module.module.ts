import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AModuleComponent } from './a-module.component';

// TODO:2:a-module模块下创建的组件都需要引入进来【引入到a-module.ts模块文件中】
import { AComponentComponent } from './A-component/A-component.component';
import { BComponentComponent } from './B-component/B-component.component';
// TODO:3:要在自己的module.ts文件中引入自己的路由！，不是写到声明里，要写到import中【路由字体的颜色和其他颜色是不一样的】
import { ARouterRoutes } from './a-router.routing';



// TODO:1:@NgModule({
//     　　declarations: [], //属于当前模块的组件、指令及管道
//     　　imports: [], //当前模板所依赖的项，即外部模块（包括httpModule、路由等）
//     　　export:[],//声明出应用给其他的module使用
//     　　providers: [], //注入服务到当前模块
//     　　bootstrap: []//默认启动哪个组件(只有根模块才能设置bootstrap属性)
//     })

@NgModule({
  declarations: [AModuleComponent, AComponentComponent, BComponentComponent],
  imports: [
    CommonModule,
    ARouterRoutes
  ],
  exports: [
    AComponentComponent,
    BComponentComponent
  ]
})
export class AModuleModule { }
