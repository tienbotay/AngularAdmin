import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuAnListComponent } from './du-an-list.component';

describe('DuAnListComponent', () => {
  let component: DuAnListComponent;
  let fixture: ComponentFixture<DuAnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuAnListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuAnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
