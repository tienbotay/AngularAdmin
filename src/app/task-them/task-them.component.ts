import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { DuAN } from '../du-an';
import { NhanVien } from '../nhan-vien';
import { Task } from '../task';

@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css']
})
export class TaskThemComponent implements OnInit {
  frm1!: FormGroup;
  listTask: any = [];
  listDuAn: any = [];
  listNV: any = [];

  constructor(
    private router: Router,
    private appService: AppService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.appService.getAllTask().subscribe(data => {
      this.listTask = data;
    });
    this.appService.getAllDuAn().subscribe(data => {
      this.listDuAn = data;
    });
    this.appService.getAllNhanVien().subscribe(data => {
      this.listNV = data;
    });
    this.frm1 = this.fb.group({
      tenTask: ['', Validators.required],
      moTa: ['', Validators.required],
      duAnID: ['', Validators.required],
      nhanVienID: ['', Validators.required],
      priority: [0, Validators.required],
      status: [0, Validators.required]
    })
  }
  themTask() {
    this.frm1.markAllAsTouched();
    if (this.frm1.valid) {
      alert('Bạn đã thêm Task thành công');
      console.log({
        id: this.listTask[this.listTask.length-1].id+1, tenTask: this.frm1.value.tenTask, moTa: this.frm1.value.moTa, duAnID: this.frm1.value.duAnID, nhanvienID: this.frm1.value.nhanVienID, priority: this.frm1.value.priority, status: this.frm1.value.status
      });
      
      this.appService.addTask({
        id: this.listTask[this.listTask.length-1].id+1, tenTask: this.frm1.value.tenTask, moTa: this.frm1.value.moTa, duAnID: this.frm1.value.duAnID, nhanvienID: this.frm1.value.nhanVienID, priority: this.frm1.value.priority, status: this.frm1.value.status
      }).subscribe();
      alert('Bạn đã thêm task thành công');
      this.router.navigate(['listTask']);
    }
  }
}
