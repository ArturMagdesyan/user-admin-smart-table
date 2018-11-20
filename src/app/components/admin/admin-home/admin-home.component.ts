import { Component, OnInit } from '@angular/core';
//Ng2 Smart Table Sorce
import { LocalDataSource } from 'ng2-smart-table';
//Route
import { Router } from '@angular/router';
// Service
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})

export class AdminHomeComponent implements OnInit {

  public admin = JSON.parse(localStorage.admin);
  public users: any[];
  public settings = {
    columns: {
      id: {
        title: 'Id',
        editable: false,
        addable: false
      },
      last_name: {
        title: 'Last Name',
      },
      first_name: {
        title: 'First Name',
      },
      email: {
        title: 'Email',
      },
      password: {
        title: 'Password',
      },
      status: {
        title: 'Status',
      }
    },
    edit: {
      editButtonContent: '<i class="ion-edit">Edit</i>',
      saveButtonContent: '<i class="ion-checkmark">Save</i>',
      cancelButtonContent: '<i class="ion-close">Cancle</i>',
          confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a">Delete</i>',
      confirmDelete: true
    },
    add: {
      confirmCreate: true,
    },
  }

  source: LocalDataSource;

  constructor(private _appService: AppService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }
  // get all users
  getUsers() {
      var promise = new Promise((resolve, reject) => {
          this._appService.getUsers().subscribe( 
            res => {
              return resolve(JSON.parse(res['_body']));
            },
            err => {
              console.log(err);
          });
      })
  promise
    .then((res:any[])=>{
      this.users = res,
      this.source = new LocalDataSource(this.users);
    })
  }
  // delete (user)
  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log(event);
      event.confirm.resolve();
      //go to server (delete)
      this._appService.deleteUser(event.data.id).subscribe( 
        res => console.log(res),
        err => console.log(err),
      )
    } else {
      event.confirm.reject();
    }
  }
  // save update (user)
  onSaveConfirm(event) {
    const data = event.newData;
    if (window.confirm('Are you sure you want to save?')) {
      //event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
      // Go to server (save)
      this._appService.update(data).subscribe(
        res => console.log(res),
        err => console.log(err),
      )

    } else {
      event.confirm.reject();
    }
  }
  // Create new user
  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      console.log(event.newData);
      //event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
      // Go to server (create)
      this._appService.registrationUser(event.newData).subscribe(
        res => console.log(res),
        err => console.log(err),
      )
    } else {
      event.confirm.reject();
    }
  }
  // Go to user profile
  public onUserRowSelect(event:any){
    this.router.navigate(['/admin/profile', event.data.id]);
  }
}