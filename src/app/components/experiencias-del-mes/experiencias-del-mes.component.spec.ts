import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciasDelMesComponent } from './experiencias-del-mes.component';

describe('ExperienciasDelMesComponent', () => {
  let component: ExperienciasDelMesComponent;
  let fixture: ComponentFixture<ExperienciasDelMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienciasDelMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciasDelMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
