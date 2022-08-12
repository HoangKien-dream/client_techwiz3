import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthVitalsComponent } from './health-vitals.component';

describe('HealthVitalsComponent', () => {
  let component: HealthVitalsComponent;
  let fixture: ComponentFixture<HealthVitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthVitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
