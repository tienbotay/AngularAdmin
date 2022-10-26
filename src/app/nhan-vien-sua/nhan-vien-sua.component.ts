import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nhan-vien-sua',
  templateUrl: './nhan-vien-sua.component.html',
  styleUrls: ['./nhan-vien-sua.component.css']
})
export class NhanVienSuaComponent implements OnInit {
  id = Number(this.route.snapshot.paramMap.get('id'));
  NV: any;
  frm1!: FormGroup;
  constructor(
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getInfoNV();
  }
  editNV() {
    this.frm1.markAllAsTouched();
    if(this.frm1.valid){
      this.appService.updateNhanVien(this.id, {
        "ho": this.frm1.value.hoNV,
        "ten":  this.frm1.value.tenNV,
        "ngaysinh":  this.frm1.value.ngaySinh,
        "phai":  this.frm1.value.phai,
        "khuvuc":  this.frm1.value.khuVuc,
        "leader":  this.frm1.value.leader
      }).subscribe(() => {
      })
      alert('Bạn đã cập nhật nhân viên thành công');
      this.router.navigate(['listNV']);
    }
  }

  getInfoNV() {
    this.appService.getOneNhanVien(this.id).subscribe(data => {
      this.NV = data;
      console.log(this.NV);
      this.frm1 = this.fb.group({
        hoNV: [this.NV.ho, Validators.required],
        tenNV: [this.NV.ten, Validators.required],
        ngaySinh: [this.NV.ngaysinh, Validators.required],
        phai: [this.NV.phai, Validators.required],
        khuVuc: [this.NV.khuvuc, Validators.required],
        leader: [this.NV.leader, Validators.required]
      })
    })
  }
}
