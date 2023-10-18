import { Component } from '@angular/core';
import { PopupEditarService } from './popup-editar.service';

@Component({
  selector: 'app-popup-editar',
  templateUrl: './popup-editar.component.html',
  styleUrls: ['./popup-editar.component.css']
})
export class PopupEditarComponent {
  formData = {
    name: '',
    lugares: ''
  };

  constructor(private popupEditarService: PopupEditarService) {}

  get isEPopupOpen() {
    return this.popupEditarService.isEPopupOpen;
  }

  openEPopup() {
    this.popupEditarService.openEPopup();
  }

  closeEPopup() {
    this.popupEditarService.closeEPopup();
  }

  submitForm() {
    // Lógica para enviar o formulário aqui
    console.log(this.formData);
    this.closeEPopup();
  }
}
