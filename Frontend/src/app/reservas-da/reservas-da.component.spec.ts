import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasDaComponent } from './reservas-da.component';

describe('ReservasDaComponent', () => {
  let component: ReservasDaComponent;
  let fixture: ComponentFixture<ReservasDaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasDaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasDaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
