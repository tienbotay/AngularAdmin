import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listNV: any;
  tongTien: number = 0;
  tongNV: number = 0;
  tongTask: number = 0;
  uncompletedTask: number = 0
  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getAllNhanVien().subscribe(data=>{
      this.listNV = data;
      this.tongNV = this.listNV.length;
    });
    this.appService.getAllTask().subscribe(data=>{
      for (const [key, value] of Object.entries(data)) {
        this.tongTask+=1;
        if(value.status == 0){
          this.uncompletedTask +=1 ;
        }
      }
    })
    this.tinhTongTien();
  }
  tinhTongTien(){
    this.appService.getAllDuAn().subscribe(data=>{
      for (const [key, value] of Object.entries(data)) {
        this.tongTien += value.tien;
      }
    })
  }
}
