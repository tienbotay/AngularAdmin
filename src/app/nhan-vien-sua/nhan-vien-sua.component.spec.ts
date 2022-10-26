import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanVienSuaComponent } from './nhan-vien-sua.component';

describe('NhanVienSuaComponent', () => {
  let component: NhanVienSuaComponent;
  let fixture: ComponentFixture<NhanVienSuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanVienSuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanVienSuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
