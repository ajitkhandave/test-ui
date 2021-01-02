import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFeebackListComponent } from './employee-feeback-list.component';

describe('EmployeeFeebackListComponent', () => {
  let component: EmployeeFeebackListComponent;
  let fixture: ComponentFixture<EmployeeFeebackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFeebackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFeebackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
