
import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { Router } from '@angular/router';
///import { LoginService } from '../services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
  	private router: Router
  	) {
  	
  }

  ngOnInit() {
  }


}
