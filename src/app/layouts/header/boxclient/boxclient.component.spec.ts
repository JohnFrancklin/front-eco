import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxclientComponent } from './boxclient.component';

describe('BoxclientComponent', () => {
  let component: BoxclientComponent;
  let fixture: ComponentFixture<BoxclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
