import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTheCarComponent } from './find-the-car.component';

describe('FindTheCarComponent', () => {
  let component: FindTheCarComponent;
  let fixture: ComponentFixture<FindTheCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindTheCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTheCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
