import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { DuAN } from '../du-an';
import { NhanVien } from '../nhan-vien';

@Component({
  selector: 'app-du-an-list',
  templateUrl: './du-an-list.component.html',
  styleUrls: ['./du-an-list.component.css']
})
export class DuAnListComponent implements OnInit {
  listDuAn: any = [];
  listNV: any = [];
  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getAllDuAn().subscribe(data => {
      this.listDuAn = data;
    });
    this.appService.getAllNhanVien().subscribe(data => {
      this.listNV = data;
    });
    this.appService.headerKeyword$.subscribe(value => {
      this.locDuAn(value);
    })
  }
  xoaDuAn(id: number) {
    if (confirm('Bạn có muốn xóa dự án này ?')) {
      alert('Bạn đã xóa thành công');
      this.appService.deleteDuAn(id).subscribe(data => {
        this.listDuAn = data;
      });
    }
  }
  thanhVienDuAn(thanhVien: number[]) {
    let dsThanhVien: string[] = [];
    thanhVien.forEach(nv => {
      this.listNV.forEach((item: { id: number; ho: string; ten: string; }) => {
        if (nv == item.id) {
          dsThanhVien.push(" " + item.ho + " " + item.ten)
        }
      });
    });
    return dsThanhVien;
  }

  locDuAn(kw: string) {
    this.listDuAn = this.listDuAn.filter((item: { tenDuAn: string; ngayStart: string; tien: any; id: any; }) => (item.tenDuAn.toLowerCase() + item.ngayStart.toLowerCase() + item.tien + item.id).includes(kw.toLowerCase()));
  }
}
