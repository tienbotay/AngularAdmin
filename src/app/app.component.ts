import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS15456_PhamLeNhatTien_ASM1';
  kw: string = '';
  // chucNang: string = '';
  // ganCN(cn: string = '') {
  //   this.chucNang = cn;
  // }
  constructor(
    private appService: AppService,
    private router: Router
  ){}
  test(){
    this.appService.headerKeyword$.next(this.kw);
  }
  daDangNhap(){
    return this.appService.daDangNhap();
  }
  dangXuat(){
    this.appService.logOut();
  }
}
