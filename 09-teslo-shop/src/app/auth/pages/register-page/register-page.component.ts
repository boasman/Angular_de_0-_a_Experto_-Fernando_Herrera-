import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';


@Component({
  standalone: true,
  imports:[ReactiveFormsModule],
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent  {


  authService = inject(AuthService);

  fb = inject(FormBuilder);
  hasError = signal(false);
  isPosting = signal(false)
  router = inject(Router);

  registerForm = this.fb.group({
    fullName: ['', [Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]

  })

  onSubmit(){

    if(this.registerForm.invalid){
      this.hasError.set(true),
      this.Error();
      return;
    }

    const {email ='', password = '', fullName = ''} = this.registerForm.value;


    this.authService.register(email!,password!, fullName!)
    .subscribe(isSuccess => {

      if(isSuccess){
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
