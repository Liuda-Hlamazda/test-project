import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeepIsDifferentFromTheRestComponent } from './beep-is-different-from-the-rest.component';

describe('BeepIsDifferentFromTheRestComponent', () => {
  let component: BeepIsDifferentFromTheRestComponent;
  let fixture: ComponentFixture<BeepIsDifferentFromTheRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeepIsDifferentFromTheRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeepIsDifferentFromTheRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
