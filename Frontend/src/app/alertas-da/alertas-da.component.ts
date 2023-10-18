import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Multa } from './alertas-da.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-alertas-da',
  templateUrl: './alertas-da.component.html',
  styleUrls: ['./alertas-da.component.css']
})
export class AlertasDaComponent {

  multas: Multa[] = [];
  
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    const token = localStorage.getItem('Token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<Multa[]>('http://localhost:3000/multa', { headers: headers  }).subscribe({
      next: (multas: Multa[]) => {
        this.multas = multas;
      },
      error: (error) => {
        console.error('Erro ao encontrar as multas', error);
      },
    });
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
