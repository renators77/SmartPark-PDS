import { Component } from '@angular/core';
import { PopupAdicionarService } from './popup-adicionar.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-popup-adicionar',
  templateUrl: './popup-adicionar.component.html',
  styleUrls: ['./popup-adicionar.component.css']
})
export class PopupAdicionarComponent {
  formData = {
    name: '',
    lugares: ''
  };

  constructor(private popupAdicionarService: PopupAdicionarService, private http: HttpClient) {}

  get isAPopupOpen() {
    return this.popupAdicionarService.isAPopupOpen;
  }

  openAPopup() {
    this.popupAdicionarService.openAPopup();
  }

  closeAPopup() {
    this.popupAdicionarService.closeAPopup();
  }

  submitForm() {
    // Lógica para enviar o formulário aqui
    console.log(this.formData);
    this.closeAPopup();
  }

    public LugaresDisponiveis: any;
    public LugaresTotal:any;
    public typeParque:any;

  
    
    public postMethod() {
      const token = localStorage.getItem('Token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      //create the body
      let body = {
        LugaresDisponiveis: Number(this.LugaresDisponiveis),
        LugaresTotal:Number(this.LugaresTotal),
        TPID: Number(this.typeParque)
      };

      console.log(Number(this.typeParque));
      
      
      
  
      //sends a post with the body
      this.http
        .post('http://localhost:3000/parque', body, {headers: headers})
        .subscribe((data: any) => {
          console.log(this.LugaresDisponiveis, this.LugaresTotal, this.typeParque);
        });
  
        
    }

}
