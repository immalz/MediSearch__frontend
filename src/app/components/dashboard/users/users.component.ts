import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private us: UsersService) { }

  Users = [];

  CountUser: any;

  ngOnInit(): void {

    this.us.getUsers()
      .subscribe(
        res => {
          this.Users = res;
          console.log(this.Users);
        },
        err => { console.log(err); }
      );
  }

}
