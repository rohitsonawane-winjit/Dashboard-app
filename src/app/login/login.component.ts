import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../guards/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    userName : '',
    password : ''
  }

  router = inject(Router);
  authService = inject(AuthService)

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    timer: 3000,
    timerProgressBar: true,
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    }
    })

  login(){
    if(this.loginObj.userName == '' || this.loginObj.password == ''){
      this.Toast.fire('UserName/Password missing', '', 'error')
      return;
    }
    if(this.loginObj.userName == 'admin' && this.loginObj.password == 'admin'){
      this.authService.login();
      this.router.navigateByUrl("dashboard")
    }
    else{
      this.Toast.fire('Wrong Credentials', 'Please try again!', 'error')
    }
  }
}
