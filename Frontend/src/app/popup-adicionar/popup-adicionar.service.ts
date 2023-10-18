import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupAdicionarService {
  isAPopupOpen = false;

  openAPopup() {
    this.isAPopupOpen = true;
  }

  closeAPopup() {
    this.isAPopupOpen = false;
  }
}
