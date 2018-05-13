import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MejorSandwichComponent } from './mejor-sandwich.component';

describe('MejorSandwichComponent', () => {
  let component: MejorSandwichComponent;
  let fixture: ComponentFixture<MejorSandwichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MejorSandwichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MejorSandwichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
