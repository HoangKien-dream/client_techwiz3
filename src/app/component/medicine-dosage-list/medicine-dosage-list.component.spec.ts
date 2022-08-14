import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineDosageListComponent } from './medicine-dosage-list.component';

describe('MedicineDosageListComponent', () => {
  let component: MedicineDosageListComponent;
  let fixture: ComponentFixture<MedicineDosageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineDosageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineDosageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
