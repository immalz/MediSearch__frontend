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
  rol = '';

  constructor(public authService: AuthService, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  SignIn(): any {
    this.authService.signIn(this.user)
      .subscribe(
        res => {
          this.getRole(res.userFound._id);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/']);
        } ,
        err => {console.log(err); }
      );
  }


  getRole(id: string): any {
    this.userService.getRoles(id).subscribe(
      res => {
        this.rol = res.message;
        localStorage.setItem('rol', res.message);
        this.authService.rolUsuario = this.rol;

        console.log(this.authService.rolUsuario);
      }
    );
  }
}
