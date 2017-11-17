import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveComponent } from './give.component';

describe('GiveComponent', () => {
  let component: GiveComponent;
  let fixture: ComponentFixture<GiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
