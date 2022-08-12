import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineDosageComponent } from './medicine-dosage.component';

describe('MedicineDosageComponent', () => {
  let component: MedicineDosageComponent;
  let fixture: ComponentFixture<MedicineDosageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineDosageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineDosageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
