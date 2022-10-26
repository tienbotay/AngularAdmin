import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  frm1!: FormGroup
  constructor(
    private appService: AppService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.frm1 = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  xuLyDangNhap(data: any) {
    this.appService.login(data.username, data.password).subscribe(
      res => {
        var d = JSON.parse(res);
        console.log("Đăng nhập thành công ", res);
        const expiresAt = moment().add(d.expiresIn, 'second');
        localStorage.setItem('id_token', d.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
        this.router.navigateByUrl('/');
      },
      error => {
        console.log('oops', error);
        this.router.navigateByUrl('');
      }
    )

  }
}
