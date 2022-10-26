import { Component, OnInit , Input} from '@angular/core';
import { AppService } from '../app.service';
import { NhanVien } from '../nhan-vien';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-du-an-them',
  templateUrl: './du-an-them.component.html',
  styleUrls: ['./du-an-them.component.css']
})
export class DuAnThemComponent implements OnInit {
  frm1!: FormGroup
  listNV: any = [];
  listDA: any = [];
  constructor(
    private appService: AppService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.appService.getAllNhanVien().subscribe(data=>{
      this.listNV = data;
    });

    this.appService.getAllDuAn().subscribe(data=>{
      this.listDA = data;
    });
    this.frm1 = this.fb.group({
      tenDuAn: ['', [Validators.required, Validators.minLength(2)]],
      ngayStart: ['', Validators.required],
      tien: [0, [ Validators.required, Validators.min(0), Validators.max(1_000_000_000)]],
      leader: ['', Validators.required],
      thanhVien: [[], Validators.required]
    })
  }
  themDuAn(){
    this.frm1.markAllAsTouched();
    if(this.frm1.valid){
      this.appService.addDuAn(
        {
          id: this.listDA[this.listDA.length-1].id + 1 ,tenDuAn: this.frm1.value.tenDuAn, ngayStart: this.frm1.value.ngayStart, tien: this.frm1.value.tien, leader: this.frm1.value.leader, thanhvien : this.frm1.value.thanhVien
        }
      ).subscribe(data=>{
        console.log(data);
      });
      // this.appService.listDuAn.push({
      //   id: this.appService.listDuAn.length + 1, tenDuAn: this.tenDA, ngayStart: this.ngayStart, tien: this.giaTien, leader: this.leader, thanhvien : this.thanhVien
      // })
      alert('Bạn đã thêm dự án thành công');
      this.router.navigate(['listDuAn']);
    }
  }
}
