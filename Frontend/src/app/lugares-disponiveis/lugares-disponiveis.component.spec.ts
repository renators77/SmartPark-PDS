import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresDisponiveisComponent } from './lugares-disponiveis.component';

describe('LugaresDisponiveisComponent', () => {
  let component: LugaresDisponiveisComponent;
  let fixture: ComponentFixture<LugaresDisponiveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugaresDisponiveisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugaresDisponiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
