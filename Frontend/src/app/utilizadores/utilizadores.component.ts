import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';

@Component({
  selector: 'app-utilizadores',
  templateUrl: './utilizadores.component.html',
  styleUrls: ['./utilizadores.component.css'],
})
export class UtilizadoresComponent implements OnInit {
  users: User[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    const token = localStorage.getItem('Token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<User[]>('http://localhost:3000/user', { headers: headers  }).subscribe({
      next: (users: User[]) => {
        this.users = users;
      },
      error: (error) => {
        console.error('Erro ao encontrar os Parques', error);
      },
    });
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
