import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NhanVien } from '../nhan-vien';

@Component({
  selector: 'app-nhan-vien-list',
  templateUrl: './nhan-vien-list.component.html',
  styleUrls: ['./nhan-vien-list.component.css']
})
export class NhanVienListComponent implements OnInit {
  listNhanVien: any = [];
  listNVTemp: any = [];
  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getAllNhanVien().subscribe(data => {
      this.listNhanVien = data;
      this.listNVTemp = data;
    });
    this.appService.headerKeyword$
      .subscribe(value => {
        this.locNV(value);
      })
  }
  xoaNV(id: number) {
    if (confirm('Bạn có muốn xóa nhân viên này ?')) {
      this.appService.deleteNhanVien(id).subscribe((nvs) => {
        this.listNhanVien = nvs;
        alert('Bạn đã xóa thành công');
      })
    }
  }

  locNV(kw: string) {
    this.listNhanVien = this.listNVTemp.filter((item: { ho: string; ten: string; khuvuc: string; id: any; }) => (item.ho.toLowerCase() + item.ten.toLowerCase() + item.khuvuc.toLowerCase() + item.id).includes(kw.toLowerCase()));
  }
}
