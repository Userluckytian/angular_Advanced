import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// TODO:6:引入根路由
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';




@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      NgZorroAntdModule,
      CommonModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
