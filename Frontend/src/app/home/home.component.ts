import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Parque } from '../parques/parque.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private http: HttpClient) {}
  public res: any;
  parques : Parque[] = [];

  ngOnInit() {
    this.http
      .get<Parque[]>('http://localhost:3000/estatistica/occupationparques')
      .subscribe({
        next: parques => {
          this.parques = parques;
        },
        error: error => {
         console.error('Erro ao encontrar os Parques', error);
        }
      });
  }
}
