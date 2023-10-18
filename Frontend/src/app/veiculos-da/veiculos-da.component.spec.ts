import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosDaComponent } from './veiculos-da.component';

describe('VeiculosDaComponent', () => {
  let component: VeiculosDaComponent;
  let fixture: ComponentFixture<VeiculosDaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosDaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculosDaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
