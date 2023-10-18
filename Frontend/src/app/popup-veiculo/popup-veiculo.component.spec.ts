import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupVeiculoComponent } from './popup-veiculo.component';

describe('PopupVeiculoComponent', () => {
  let component: PopupVeiculoComponent;
  let fixture: ComponentFixture<PopupVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupVeiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
