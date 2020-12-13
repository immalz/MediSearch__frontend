import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import { PharmsService } from 'src/app/services/pharms.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  panelOpenState = false;
  role: string;
  id: string;
  isAdmin = false;

  constructor(public authService: AuthService, private router: Router, private ps: PharmsService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('rol');

    if (this.role === 'admin') {
      this.isAdmin = true;
    } else if (this.role === 'moderator') {
      this.isAdmin = false;
    }
  }
}
