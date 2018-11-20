import { Component, OnInit } from '@angular/core';
//Form Group
import { FormControl, FormGroup, Validators } from '@angular/forms';
//Router
import { Router } from '@angular/router';
// Service
import { AppService } from '../../services/app.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _appService: AppService, private router: Router) { }

  ngOnInit() {
    // Form Validator
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('', [
        Validators.required
      ])
    });
  }
  // Go to servic (login)
  SubLogin(form) {
    if (form.valid) {
      this._appService.login(form.value).subscribe( 
        res => {
          const user = JSON.parse(res['_body']);
          if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user['0']));
            this.router.navigate(['/profile']);
          }
        },
        error =>{
          console.log(error.ok);
      })
    }
  }
}
