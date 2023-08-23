import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyControlComponent } from './my-control.component';

describe('MyControlComponent', () => {
  let component: MyControlComponent;
  let fixture: ComponentFixture<MyControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyControlComponent]
    });
    fixture = TestBed.createComponent(MyControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
