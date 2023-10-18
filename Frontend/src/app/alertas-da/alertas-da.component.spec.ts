import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasDaComponent } from './alertas-da.component';

describe('AlertasDaComponent', () => {
  let component: AlertasDaComponent;
  let fixture: ComponentFixture<AlertasDaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertasDaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertasDaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
