import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainscComponent } from './mainsc.component';

describe('MainscComponent', () => {
  let component: MainscComponent;
  let fixture: ComponentFixture<MainscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
