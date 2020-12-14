import { AuthService } from './../../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  panelOpenState = false;
  constructor(public authService: AuthService, private router: Router, private userService: UsersService) { }

  UserInfo: any;
  id: string;

  ngOnInit(): void {
    this.id = localStorage.getItem('_id');
    this.getInfo();
  }

  getInfo(): any {
    this.userService.getSingleUser(this.id)
    .subscribe(
      res => {

        this.UserInfo = res;

        const {username, imgURL} = this.UserInfo;

      },
      err => {
        console.log(err);
      }
    );
  }

}

