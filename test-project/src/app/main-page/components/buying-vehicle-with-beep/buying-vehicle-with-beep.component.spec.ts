import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingVehicleWithBeepComponent } from './buying-vehicle-with-beep.component';

describe('BuyingVehicleWithBeepComponent', () => {
  let component: BuyingVehicleWithBeepComponent;
  let fixture: ComponentFixture<BuyingVehicleWithBeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyingVehicleWithBeepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingVehicleWithBeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
