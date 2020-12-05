import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import User from '../../interfaces/User';
import {AuthService} from '../../services/auth.service';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    email: '',
    password: ''
  };
  rol = {};

  constructor(public authService: AuthService, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  SignIn(): any {
    this.authService.signIn(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.authService.UserFound = res.userFound;

          localStorage.setItem('token', res.token);
          localStorage.setItem('_id', res.userFound._id);
          localStorage.setItem('email', res.userFound.email);
          localStorage.setItem('rol', res.userFound.roles[0].name);
          this.router.navigate(['/']);
        } ,
        err => {console.log(err); }
      );
  }
}
