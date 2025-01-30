import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedDisplayComponent } from './led-display.component';

describe('LedDisplayComponent', () => {
  let component: LedDisplayComponent;
  let fixture: ComponentFixture<LedDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LedDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
