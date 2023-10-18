import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupEditarService {
  isEPopupOpen = false;

  openEPopup() {
    this.isEPopupOpen = true;
  }

  closeEPopup() {
    this.isEPopupOpen = false;
  }
}
