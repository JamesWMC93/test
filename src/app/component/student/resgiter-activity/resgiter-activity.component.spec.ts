import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgiterActivityComponent } from './resgiter-activity.component';

describe('ResgiterActivityComponent', () => {
  let component: ResgiterActivityComponent;
  let fixture: ComponentFixture<ResgiterActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgiterActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResgiterActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
