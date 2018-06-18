import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleItemExperienciaComponent } from './detalle-item-experiencia.component';

describe('DetalleItemExperienciaComponent', () => {
  let component: DetalleItemExperienciaComponent;
  let fixture: ComponentFixture<DetalleItemExperienciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleItemExperienciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleItemExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
