import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })


  
  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  guardar(){
    console.info(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    this.authSvc.login(email, password)
    .then( res => {
      Swal.fire(
        '',
        'Usuario Logueado',
        'success'
      );
      this.router.navigateByUrl('/heroes');
    })
    .catch( err => alert('error al loguearse'))
  }

  onGoogle(){
    this.authSvc.loginGoogle()
    .then( () => {
      Swal.fire(
        '',
        'Usuario Logueado',
        'success'
      );
      this.router.navigateByUrl('/heroes');
    })
    .catch(err => alert('error al loger con google'))
  }
}
