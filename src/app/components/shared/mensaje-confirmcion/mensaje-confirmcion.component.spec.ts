import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeConfirmcionComponent } from './mensaje-confirmcion.component';

describe('MensajeConfirmcionComponent', () => {
  let component: MensajeConfirmcionComponent;
  let fixture: ComponentFixture<MensajeConfirmcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeConfirmcionComponent]
    });
    fixture = TestBed.createComponent(MensajeConfirmcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
