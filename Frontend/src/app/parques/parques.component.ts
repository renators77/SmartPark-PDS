import { Component, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { PopupAdicionarService } from '../popup-adicionar/popup-adicionar.service';
import { PopupEditarService } from '../popup-editar/popup-editar.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Parque } from './parque.model';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})

export class ParquesComponent {

  parques : Parque[] = [];

  constructor(private router: Router, private popupAdicionarService: PopupAdicionarService, private popupEditarService: PopupEditarService, private http:HttpClient) {}

 ngOnInit() {
  this.http.get<Parque[]>('http://localhost:3000/parque').subscribe({
    next: parques => {
      this.parques = parques;
    },
    error: error => {
     console.error('Erro ao encontrar os Parques', error);
    }
  });
 }

  public getJsonValue: any;

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
    this.getMethod();
  }

  get isAPopupOpen() {
    return this.popupAdicionarService.isAPopupOpen;
  }
  openAPopup() {
    this.popupAdicionarService.openAPopup();
  }
  closeAPopup() {
    this.popupAdicionarService.closeAPopup();
  }

  get isEPopupOpen() {
    return this.popupEditarService.isEPopupOpen;
  }
  openEPopup() {
    this.popupEditarService.openEPopup();
  }
  closeEPopup() {
    this.popupEditarService.closeEPopup();
  }

  public getMethod() {
    this.http.get('http://localhost:3000/estatistica/numberofmultas').subscribe((data) => {
      console.log("Parques Data:"+ data);
      this.getJsonValue = data;
    });
  }
}