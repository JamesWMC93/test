import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAttendComponent } from './check-attend.component';

describe('CheckAttendComponent', () => {
  let component: CheckAttendComponent;
  let fixture: ComponentFixture<CheckAttendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAttendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckAttendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
