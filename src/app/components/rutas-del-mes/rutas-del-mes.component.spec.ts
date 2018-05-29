import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasDelMesComponent } from './rutas-del-mes.component';

describe('RutasDelMesComponent', () => {
  let component: RutasDelMesComponent;
  let fixture: ComponentFixture<RutasDelMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutasDelMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutasDelMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
