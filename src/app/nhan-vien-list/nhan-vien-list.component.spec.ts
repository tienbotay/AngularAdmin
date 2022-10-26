import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanVienListComponent } from './nhan-vien-list.component';

describe('NhanVienListComponent', () => {
  let component: NhanVienListComponent;
  let fixture: ComponentFixture<NhanVienListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanVienListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanVienListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
