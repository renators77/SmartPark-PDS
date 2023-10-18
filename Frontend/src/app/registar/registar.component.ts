import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './registar.dto';
import { mergeMap } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css'],
})
export class RegistarComponent {
  constructor(private router: Router, private http: HttpClient,private authService: AuthService) {}

  //criar login
  public Username: any;
  public Password: any;
  private PermissaoID = 3;
  //criar user
  public Rua: any;
  public Nome: any;
  
  

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  public postMethod() {
    var loginID: number;

    let header = new HttpHeaders({
      contentType: 'application/json',
    });
    //create the body
    let body = {
      LoginUsername: this.Username,
      LoginPassword: this.Password,
      PermissaoID: this.PermissaoID,
    };


    //aqui uso o merge map para fazer os dois http de orden correta
    this.http
    .post<Login>('http://localhost:3000/login', body, { headers: header })
    .pipe(
      mergeMap((data: Login) => {
        const loginID = data.LoginID;
        console.log(loginID);

        let body2 = {
          Nome: this.Nome,
          Rua: this.Rua,
          NivelPermissao: this.PermissaoID,
          LoginID: loginID,
        };

        return this.http.post('http://localhost:3000/user', body2, { headers: header });
      })
    )
    .subscribe(
      (data2: any) => {
        this.router.navigate(['/Dashboard-user']);
        this.authService.setShowDashboardAdminButton(false);
      },
      (error) => {
        console.error('Error while making the POST request:', error);
      }
    );

      

  }
}
