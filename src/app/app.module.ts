import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// TODO:6:引入根路由
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';

// TODO:7:引入a-Module
// import { AModuleModule } from './a-module/a-module.module';
// TODO:8:引入b-module(会报错！)
// import { BModuleModule } from './b-module/b-module.module';


@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      NgZorroAntdModule,
      CommonModule,
      // AModuleModule,  // 先导入子模块
      // BModuleModule, //为啥这个不能引呢？
      AppRoutingModule // 再导入主模块
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
