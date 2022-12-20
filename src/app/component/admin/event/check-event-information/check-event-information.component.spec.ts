import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckEventInformationComponent } from './check-event-information.component';

describe('CheckEventInformationComponent', () => {
  let component: CheckEventInformationComponent;
  let fixture: ComponentFixture<CheckEventInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckEventInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckEventInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
