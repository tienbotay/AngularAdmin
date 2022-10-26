import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanVienThemComponent } from './nhan-vien-them.component';

describe('NhanVienThemComponent', () => {
  let component: NhanVienThemComponent;
  let fixture: ComponentFixture<NhanVienThemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanVienThemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanVienThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
