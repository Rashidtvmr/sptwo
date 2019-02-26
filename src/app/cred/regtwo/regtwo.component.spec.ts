import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegtwoComponent } from './regtwo.component';

describe('RegtwoComponent', () => {
  let component: RegtwoComponent;
  let fixture: ComponentFixture<RegtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
