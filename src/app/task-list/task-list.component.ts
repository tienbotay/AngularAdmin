import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { DuAN } from '../du-an';
import { NhanVien } from '../nhan-vien';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  listTask: any = [];
  listDuAn: any = []
  listNV: any = []
  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getAllDuAn().subscribe(data => {
      this.listDuAn = data;
    })
    this.appService.getAllNhanVien().subscribe(data => {
      this.listNV = data;
    });
    this.appService.getAllTask().subscribe(data => {
      this.listTask = data;
    });
    this.appService.headerKeyword$
      .subscribe(value => {
        this.locTask(value);
      })
  }

  xoaTask(id: number) {
    if (confirm('Bạn có muốn xóa Task này ?')) {
      this.appService.deleteTask(id).subscribe((data) => {
        alert('Bạn đã xóa thành công');
        this.listTask = data;
      })
    }
  }

  locTask(kw: string) {
    this.listTask = this.listTask.filter((item: { tenTask: string; moTa: string; id: any; }) => (item.tenTask.toLowerCase() + item.moTa.toLowerCase() + item.id).includes(kw.toLowerCase()));
  }
}
