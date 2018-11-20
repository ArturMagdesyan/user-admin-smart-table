import { Component, OnInit } from '@angular/core';
//Form Group
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Service
import { AppService } from '../../services/app.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  registrForm: FormGroup;

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.registrForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      first_name: new FormControl('', [
        Validators.required,
      ]),
      last_name: new FormControl('', [
        Validators.required,
      ]),
      'password': new FormControl('', [
        Validators.required
      ])
    });
  }

  SubRegistr(form) {
    console.log(form.value)
    if (form.valid) {
      this._appService.registration(form.value).subscribe( res => {
        console.log(res)
      })
    }
  }
}
