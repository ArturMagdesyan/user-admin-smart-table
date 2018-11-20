import { Component, OnInit } from '@angular/core';
//Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private router: Router) { }

  ngOnInit() {
  }
  // Log Out user
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
