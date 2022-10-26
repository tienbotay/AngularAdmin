import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { DuAN } from '../du-an';
import { NhanVien } from '../nhan-vien';
import { Task } from '../task';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.css']
})
export class TaskSuaComponent implements OnInit {
  frm1!: FormGroup;
  id = Number(this.route.snapshot.paramMap.get('id'));
  Task: any;
  listDuAn: any = [];
  listNV: any = [];
  constructor(
    private router: Router,
    private appService: AppService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.appService.getAllDuAn().subscribe(data => {
      this.listDuAn = data;
    })
    this.appService.getAllNhanVien().subscribe(data => {
      this.listNV = data;
    })
    this.getInfoTask();
  }
  editTask() {
    this.frm1.markAllAsTouched();
    if (this.frm1.valid) {
      this.appService.updateTask(this.id, {
        "tenTask": this.frm1.value.tenTask,
        "moTa": this.frm1.value.moTa,
        "duAnID": this.frm1.value.duAnID,
        "nhanvienID": this.frm1.value.nhanVienID,
        "priority": this.frm1.value.priority,
        "status": this.frm1.value.status
      }).subscribe(() => {
      }
      );
      alert('Bạn đã cập nhật Task thành công');
      this.router.navigate(['listTask']);
    }
  }

  getInfoTask() {
    this.appService.getOneTask(this.id).subscribe(data => {
      this.Task = data;
      this.frm1 = this.fb.group({
        tenTask: [this.Task.tenTask, Validators.required],
        moTa: [this.Task.moTa, Validators.required],
        duAnID: [this.Task.duAnID, Validators.required],
        nhanVienID: [this.Task.nhanvienID, Validators.required],
        priority: [this.Task.priority, Validators.required],
        status: [this.Task.status, Validators.required]
      })
    })
  }
}
