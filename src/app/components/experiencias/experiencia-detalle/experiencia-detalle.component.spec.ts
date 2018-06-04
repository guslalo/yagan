import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaDetalleComponent } from './experiencia-detalle.component';

describe('ExperienciaDetalleComponent', () => {
  let component: ExperienciaDetalleComponent;
  let fixture: ComponentFixture<ExperienciaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienciaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
