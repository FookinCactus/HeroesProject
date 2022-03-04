import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowersdropdownComponent } from './powersdropdown.component';

describe('PowersdropdownComponent', () => {
  let component: PowersdropdownComponent;
  let fixture: ComponentFixture<PowersdropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowersdropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowersdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
