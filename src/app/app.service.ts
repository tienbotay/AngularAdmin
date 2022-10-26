import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DuAN } from './du-an';
import { NhanVien } from './nhan-vien';
import { Task } from './task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  headerKeyword$: Subject<string> = new Subject();

  constructor(
    private _http: HttpClient
  ) { }

  getAllDuAn(){
    return this._http.get('http://localhost:3000/listDuAn').pipe();
  }

  deleteDuAn(id:number){
    return this._http.delete(`http://localhost:3000/listDuAn/${id}`);
  }

  addDuAn(data: any){
    return this._http.post(`http://localhost:3000/themDuAn`, data);
  }
  getOneDuAn(id:number){
    return this._http.get(`http://localhost:3000/listDuAn/${id}`);
  }

  updateDuAn(id:number, data: any){
    return this._http.put(`http://localhost:3000/listDuAn/${id}`, data);
  }

  getAllTask(){
    return this._http.get('http://localhost:3000/listTask');
  }

  deleteTask(id:number){
    return this._http.delete(`http://localhost:3000/listTask/${id}`);
  }

  addTask(data: any){
    return this._http.post(`http://localhost:3000/themTask`, data);
  }
  getOneTask(id:number){
    return this._http.get(`http://localhost:3000/listTask/${id}`);
  }

  updateTask(id:number, data: any){
    return this._http.put(`http://localhost:3000/listTask/${id}`, data);
  }

  getAllNhanVien(){
    return this._http.get('http://localhost:3000/listNhanVien');
  }

  deleteNhanVien(id:number){
    return this._http.delete(`http://localhost:3000/listNhanVien/${id}`);
  }

  addNhanVien(data: any){
    return this._http.post(`http://localhost:3000/themNhanVien`, data);
  }
  getOneNhanVien(id:number){
    return this._http.get(`http://localhost:3000/listNhanVien/${id}`);
  }

  updateNhanVien(id:number, data: any){
    return this._http.put(`http://localhost:3000/listNhanVien/${id}`, data);
  }

  public daDangNhap() {
    const str = localStorage.getItem("expires_at") || "";
    if (str == "") return false; //chưa dn    
    const expiresAt = JSON.parse(str);
    return moment().isBefore(moment(expiresAt));
  }

  login(username: string = '', password: string = '') {
    const userInfo = { un: username, pw: password }
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post('http://localhost:3000/login'
      , JSON.stringify(userInfo)
      , { headers: headers, responseType: 'text' }
    )
  }//login

  logOut(){
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }
}
