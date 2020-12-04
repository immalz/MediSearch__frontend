import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import User from '../../interfaces/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user: User = {
    username: '',
    email: '',
    password: ''
  };


  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  SignUp(): any {
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/acceder']);
        },
        err => {console.log(err); }
      );
  }

}
