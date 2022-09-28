import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuOptionComponent } from './stu-option.component';

describe('StuOptionComponent', () => {
  let component: StuOptionComponent;
  let fixture: ComponentFixture<StuOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
