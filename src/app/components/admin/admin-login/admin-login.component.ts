import { Component, OnInit } from '@angular/core';
//Form Group
import { FormControl, FormGroup, Validators } from '@angular/forms';
//Router
import { Router } from '@angular/router';
// Service
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {

  adminLoginForm: FormGroup

  constructor(private _appService: AppService, 
              private router: Router) { }

  ngOnInit() {
    // Form Validator
    this.adminLoginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('', [
        Validators.required
      ])
    });
  }
  // Go to server (login)
  SubLogin(form) {
    if (form.valid) {
      this._appService.adminLogin(form.value).subscribe( 
        res => {
          const admin = JSON.parse(res['_body']);
          if (admin) {
            localStorage.setItem('admin', JSON.stringify(admin['0']));
            this.router.navigate(['/admin/home']);
          }
        },
        err => {
          console.log(err);
        })  
    }
  }
}