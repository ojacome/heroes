import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })



  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }



  guardar(){
    console.info(this.registerForm.value);
    const { email, password } = this.registerForm.value;
    this.authSvc.register( email, password )
    .then( res => {
      Swal.fire(
        '',
        'Usuario registrado',
        'success'
      );
      this.router.navigateByUrl('/heroes');
    })
    .catch( error => alert('error al registrar'))
  }
}
