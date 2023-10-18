import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private http: HttpClient, private authService: AuthService) {}
  
  public Email: any;
  public Password: any;

  public postMethod() {
    let header = new HttpHeaders({
      contentType: 'application/json',
    });
    //create the body
    let body = {
      LoginUsername: this.Email,
      LoginPassword: this.Password,
    };
    
    //sends a post with the body
    this.http
      .post('http://localhost:3000/auth/login', body, { headers: header })
      .subscribe((data: any) => {
        const Permissao = data.Permissao;
        const Token = data.Token;
        const UserID = data.LoginID;
        
        //gravar em local storage
        localStorage.setItem('Permissao', Permissao);
        localStorage.setItem('Token', Token);
        localStorage.setItem('UserID', UserID);
        localStorage.setItem('isLoggedIn', 'true'); // Indicador de login bem-sucedido

        //redirect para a pagina
        if (Permissao == 1 || Permissao == 2) {
          this.router.navigate(['/Dashboard-admin']);
        } else {
          this.router.navigate(['/Dashboard-user']);
        }

        this.authService.updateButtonVisibility();
      });
  }
}
