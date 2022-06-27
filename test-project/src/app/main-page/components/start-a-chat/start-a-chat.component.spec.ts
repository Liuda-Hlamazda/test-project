import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAChatComponent } from './start-a-chat.component';

describe('StartAChatComponent', () => {
  let component: StartAChatComponent;
  let fixture: ComponentFixture<StartAChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartAChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartAChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
