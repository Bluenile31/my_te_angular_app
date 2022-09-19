import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedschildComponent } from './bedschild.component';

describe('BedschildComponent', () => {
  let component: BedschildComponent;
  let fixture: ComponentFixture<BedschildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedschildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
