import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';


@Component({
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

  authService = inject(AuthService);

  fb = inject(FormBuilder);
  hasError = signal(false);
  isPosting = signal(false)
  router = inject(Router);

  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]

  })

  onSubmit(){

    if(this.loginForm.invalid){
      this.hasError.set(true),
      this.Error();
      return;
    }

    const {email ='', password = ''} = this.loginForm.value;


    this.authService.login(email!,password!)
    .subscribe(isAuthenticated => {

      if(isAuthenticated){
        this.router.navigateByUrl('/');
        return;
      }

      this.hasError.set(true),
        this.Error();
    })


  }

  Error(){
    setTimeout(() => {
        this.hasError.set(false);
      }, 2000);
  }


}
