import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSliderComponent } from './staff-slider.component';

describe('StaffSliderComponent', () => {
  let component: StaffSliderComponent;
  let fixture: ComponentFixture<StaffSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
