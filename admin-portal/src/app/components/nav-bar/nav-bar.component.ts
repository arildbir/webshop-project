import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private logedIn = false;

  constructor(private loginService: LoginService, private router: Router) {}

  toggleDisplay () {this.logedIn = !this.logedIn};

  logout () {
    this.loginService.logout().subscribe(
      res => {
        location.reload();
      },
      error => {
        console.log (error);
      }
    );
    this.router.navigate(['/']);
  }//logout

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.logedIn=true;
      },
      error => {
        this.logedIn=false;
      }
    );
  }//ngOnInit

}
