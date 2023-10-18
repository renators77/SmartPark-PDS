import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarVeiculosComponent } from './registar-veiculos.component';

describe('RegistarVeiculosComponent', () => {
  let component: RegistarVeiculosComponent;
  let fixture: ComponentFixture<RegistarVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistarVeiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistarVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
