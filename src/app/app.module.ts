import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
   declarations: [
      AppComponent,
      FirstComponentComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgZorroAntdModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
