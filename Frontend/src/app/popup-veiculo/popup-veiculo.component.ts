import { Component } from '@angular/core';
import { PopupVeiculoService } from './popup-veiculo.service';

@Component({
  selector: 'app-popup-veiculo',
  templateUrl: './popup-veiculo.component.html',
  styleUrls: ['./popup-veiculo.component.css']
})
export class PopupVeiculoComponent {
  formData = {
    matricula: '',
    mes: '',
    ano: ''
  };

  constructor(private popupVeiculoService: PopupVeiculoService) {}

  get isAPopupOpen() {
    return this.popupVeiculoService.isVPopupOpen;
  }

  openVPopup() {
    this.popupVeiculoService.openVPopup();
  }

  closeVPopup() {
    this.popupVeiculoService.closeVPopup();
  }

  submitForm() {
    // Lógica para enviar o formulário aqui
    console.log(this.formData);
    this.closeVPopup();
  }
}
