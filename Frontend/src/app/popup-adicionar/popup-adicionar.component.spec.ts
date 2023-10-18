import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAdicionarComponent } from './popup-adicionar.component';

describe('PopupAdicionarComponent', () => {
  let component: PopupAdicionarComponent;
  let fixture: ComponentFixture<PopupAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAdicionarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
