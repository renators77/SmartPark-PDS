import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css'],
})
export class DashboardUserComponent {
  constructor(private router: Router) {}

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
