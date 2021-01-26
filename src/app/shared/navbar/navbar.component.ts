import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  user$ : Observable<firebase.User> = this.authSvc.afAuth.user;

  

  constructor(
    public authSvc: AuthService,
    private router: Router
  ) { }



  async onLogout() {
    await this.authSvc.logout();
    this.router.navigateByUrl('/')
  }
}
