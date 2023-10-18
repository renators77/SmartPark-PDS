import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopupVeiculoService } from '../popup-veiculo/popup-veiculo.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Veiculo } from '../veiculos-da/veiculo.model';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent {
  constructor(private router: Router, private popupVeiculoService: PopupVeiculoService, private http: HttpClient) {}

  veiculos : Veiculo[] = [];

  ngOnInit() {
    var userID = localStorage.getItem('UserID');
    var userIDNumber = Number(userID); // Using Number()

    let header = new HttpHeaders({
      contentType: 'application/json',
    });

    this.http
    .post<Veiculo[]>('http://localhost:3000/veiculo/findUserVeiculos', {UserID: userIDNumber } , { headers: header })
    .subscribe({
      next: veiculos => {
        this.veiculos = veiculos;
      },
      error: error => {
       console.error('Erro ao encontrar os veiculos', error);
      }
    });
  }



  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  get isVPopupOpen() {
    return this.popupVeiculoService.isVPopupOpen;
  }
  openVPopup() {
    this.popupVeiculoService.openVPopup();
  }
  closeVPopup() {
    this.popupVeiculoService.closeVPopup();
  }
}
