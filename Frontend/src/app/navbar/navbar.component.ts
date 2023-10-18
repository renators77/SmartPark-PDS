import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router, public  authService: AuthService) {}
  
  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
  ngOnInit() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const permissao = localStorage.getItem('Permissao');
      
    if (isLoggedIn) {
      this.authService.setShowLoginRegisterButton(false); // Ocultar botão de Login/Registro
      this.authService.setShowlogoutbutton(true); // Mostrar botão de Logout
  
      if (permissao === '1' || permissao === '2') {
        this.authService.setShowDashboardAdminButton(true); // Mostrar botão do Dashboard Admin
        this.authService.setShowDashboardUserButton(true); // Mostrar botão do Dashboard User
      } else {
        this.authService.setShowDashboardAdminButton(false); // Ocultar botão do Dashboard Admin
        this.authService.setShowDashboardUserButton(true); // Mostrar botão do Dashboard User
      }
    } else {
      this.authService.setShowLoginRegisterButton(true); // Mostrar botão de Login/Registro
      this.authService.setShowlogoutbutton(false); // Ocultar botão de Logout
      this.authService.setShowDashboardAdminButton(false); // Ocultar botão do Dashboard Admin
      this.authService.setShowDashboardUserButton(false); // Ocultar botão do Dashboard User
    }
  }

  logout() {
    this.authService.setShowDashboardAdminButton(false); // Ocultar botão do Dashboard Admin
    this.authService.setShowDashboardUserButton(false); // Ocultar botão do Dashboard User
    this.authService.setShowLoginRegisterButton(true); // Mostrar botão de Login/Registro
    this.authService.setShowlogoutbutton(false); // Ocultar botão de Logout

    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('Permissao');
    localStorage.removeItem('Token');
    localStorage.removeItem('UserID');

    this.router.navigate(['/Login']);
  }
  
}
