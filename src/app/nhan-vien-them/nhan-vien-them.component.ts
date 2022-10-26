import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nhan-vien-them',
  templateUrl: './nhan-vien-them.component.html',
  styleUrls: ['./nhan-vien-them.component.css']
})
export class NhanVienThemComponent implements OnInit {
  listNV: any = [];
  frm1!: FormGroup;
  constructor(
    private appService: AppService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.frm1 = this.fb.group({
      hoNV: ['', Validators.required],
      tenNV: ['', Validators.required],
      ngaySinh: ['', Validators.required],
      phai: [true, Validators.required],
      khuVuc: ['', Validators.required],
      leader: [false, Validators.required],
    });
    this.appService.getAllNhanVien().subscribe(data=>{
      this.listNV = data;
    })
  }
  themNV() {
    this.frm1.markAllAsTouched();
    if(this.frm1.valid){
      this.appService.addNhanVien({
        "id": this.listNV[this.listNV.length-1].id + 1,
        "ho": this.frm1.value.hoNV,
        "ten": this.frm1.value.tenNV,
        "ngaysinh": this.frm1.value.ngaySinh,
        "phai": this.frm1.value.phai,
        "khuvuc": this.frm1.value.khuVuc,
        "leader": this.frm1.value.leader
      }).subscribe((data) => {
        console.log(data);
      });
      alert('Bạn đã thêm nhân viên thành công');
      this.router.navigate(['listNV']);
    }
  }
}
