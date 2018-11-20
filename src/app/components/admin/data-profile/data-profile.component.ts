import { Component, OnInit } from '@angular/core';
// Activ Router 
import { ActivatedRoute } from '@angular/router';
// Service
import { AppService } from '../../../services/app.service';


@Component({
  selector: 'app-data-profile',
  templateUrl: './data-profile.component.html',
  styleUrls: ['./data-profile.component.css']
})

export class DataProfileComponent implements OnInit {
  public id: number;
  public data_user=[{}];
  constructor(private route: ActivatedRoute, private _appService: AppService) { }

  ngOnInit() {
    // Get id
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getUser(this.id);
    });
  }
  // Get user by id
  getUser(id) {
    this._appService.getUser(id).subscribe( 
      res => {
        this.data_user = JSON.parse(res['_body']);
      },
      err =>{
        console.log(err);
    })
  }
}