import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowDoesBeepWorkComponent } from './how-does-beep-work.component';

describe('HowDoesBeepWorkComponent', () => {
  let component: HowDoesBeepWorkComponent;
  let fixture: ComponentFixture<HowDoesBeepWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowDoesBeepWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowDoesBeepWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
