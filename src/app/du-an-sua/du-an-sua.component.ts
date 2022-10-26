import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NhanVien } from '../nhan-vien';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-du-an-sua',
  templateUrl: './du-an-sua.component.html',
  styleUrls: ['./du-an-sua.component.css']
})
export class DuAnSuaComponent implements OnInit {
  id = Number(this.route.snapshot.paramMap.get('id'));
  frm1!: FormGroup;
  duAn: any;
  listNV: any = [];
  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getInfoDuan();
    this.appService.getAllNhanVien().subscribe(data => {
      this.listNV = data;
    });
  }
  editDuAn() {
    this.frm1.markAllAsTouched();
    if (this.frm1.valid) {
      this.appService.updateDuAn(this.id, {
        "tenDuAn": this.frm1.value.tenDuAn,
        "ngayStart": this.frm1.value.ngayStart,
        "tien": this.frm1.value.tien,
        "leader": this.frm1.value.leader,
        "thanhvien": this.frm1.value.thanhVien
      }).subscribe(() => {
      });
      alert('Bạn đã cập nhật dự án thành công');
      this.router.navigate(['listDuAn']);
    };
  }

  getInfoDuan() {
    this.appService.getOneDuAn(this.id).subscribe(data => {
      this.duAn = data;
      console.log(data);
      
      this.frm1 = this.fb.group({
        tenDuAn: [this.duAn.tenDuAn, [Validators.required, Validators.minLength(2)]],
        ngayStart: [this.duAn.ngayStart, Validators.required],
        tien: [this.duAn.tien, [Validators.required, Validators.min(0), Validators.max(1_000_000_000)]],
        leader: [this.duAn.leader, Validators.required],
        thanhVien: [this.duAn.thanhvien, Validators.required]
      });
    });
  }
}
