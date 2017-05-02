import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

private credential = {'username': '', 'password': ''};
private logedIn = false;

  constructor(private loginService: LoginService) { }

  onSubmit() {
    this.loginService.sendCredentail(this.credential.username, this.credential.password).subscribe(
      res => {
        console.log (res);
        localStorage.setItem("xAuthToken", res.json().token); //localStorage er et window-objekt som holder data selv etter at vinduet lukker seg
        console.log ("localStorage is: ", localStorage);
        this.logedIn = true;
        location.reload();  //reloader appen vår.
      },
      error => {
        console.log (error);
      }
    );
  }//onSubmit

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.logedIn=true;
      },
      error => {
        this.logedIn=false;
      }
    );
  }//end of ngOnInit



}
