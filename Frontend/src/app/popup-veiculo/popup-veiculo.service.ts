import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupVeiculoService {
  isVPopupOpen = false;

  openVPopup() {
    this.isVPopupOpen = true;
  }

  closeVPopup() {
    this.isVPopupOpen = false;
  }
}
