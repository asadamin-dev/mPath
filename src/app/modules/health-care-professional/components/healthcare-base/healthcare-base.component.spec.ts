import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareBaseComponent } from './healthcare-base.component';

describe('HealthcareBaseComponent', () => {
  let component: HealthcareBaseComponent;
  let fixture: ComponentFixture<HealthcareBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthcareBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcareBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
