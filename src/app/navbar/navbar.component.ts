import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'Gestion des Absences';
  username: string;
  role = 'WALO';

  constructor() { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    if (sessionStorage.getItem('role') !== null) {
      this.role = sessionStorage.getItem('role');
    }
  }

}
