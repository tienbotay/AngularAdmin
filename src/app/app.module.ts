import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DuAnListComponent } from './du-an-list/du-an-list.component';
import { DuAnThemComponent } from './du-an-them/du-an-them.component';
import { DuAnSuaComponent } from './du-an-sua/du-an-sua.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { NhanVienListComponent } from './nhan-vien-list/nhan-vien-list.component';
import { NhanVienThemComponent } from './nhan-vien-them/nhan-vien-them.component';
import { NhanVienSuaComponent } from './nhan-vien-sua/nhan-vien-sua.component';
import { HttpClientModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import localeVi from '@angular/common/locales/vi';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

registerLocaleData(localeVi, 'vi')

@NgModule({
  declarations: [
    AppComponent,
    DuAnListComponent,
    DuAnThemComponent,
    DuAnSuaComponent,
    TaskListComponent,
    TaskThemComponent,
    TaskSuaComponent,
    NhanVienListComponent,
    NhanVienThemComponent,
    NhanVienSuaComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'vi-VN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
