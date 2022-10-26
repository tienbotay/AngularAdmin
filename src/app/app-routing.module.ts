import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DuAnListComponent } from "./du-an-list/du-an-list.component";
import { DuAnThemComponent } from "./du-an-them/du-an-them.component";
import { DuAnSuaComponent } from "./du-an-sua/du-an-sua.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskSuaComponent } from "./task-sua/task-sua.component";
import { TaskThemComponent } from "./task-them/task-them.component";
import { NhanVienListComponent } from "./nhan-vien-list/nhan-vien-list.component";
import { NhanVienSuaComponent } from "./nhan-vien-sua/nhan-vien-sua.component";
import { NhanVienThemComponent } from "./nhan-vien-them/nhan-vien-them.component";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppGuard } from "./app.guard";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, canActivate:[AppGuard]
  },
  {
    path: 'listTask',
    component: TaskListComponent, canActivate:[AppGuard]
  },
  {
    path: 'addTask',
    component: TaskThemComponent, canActivate:[AppGuard]
  },
  {
    path: 'editTask/:id',
    component: TaskSuaComponent, canActivate:[AppGuard]
  },
  {
    path: 'listDuAn',
    component: DuAnListComponent, canActivate:[AppGuard]
  },
  {
    path: 'addDuAn',
    component: DuAnThemComponent, canActivate:[AppGuard]
  },
  {
    path: 'editDuAn/:id',
    component: DuAnSuaComponent, canActivate:[AppGuard]
  },
  {
    path: 'listNV',
    component: NhanVienListComponent, canActivate:[AppGuard]
  },
  {
    path: 'addNV',
    component: NhanVienThemComponent, canActivate:[AppGuard]
  },
  {
    path: 'editNV/:id',
    component: NhanVienSuaComponent, canActivate:[AppGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}