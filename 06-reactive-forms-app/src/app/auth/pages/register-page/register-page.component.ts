import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtil } from '../../../utils/form-utils';


@Component({
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  private fb = inject(FormBuilder);

  formUtils = FormUtil;

  myForm: FormGroup = this.fb.group(
    {
      name: [
        '',
        [Validators.required, Validators.pattern(this.formUtils.namePattern)],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.formUtils.emailPattern)],
        [this.formUtils.checkingServerResponse]
      ],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(this.formUtils.notOnlySpacesPattern),
          this.formUtils.notStrider
        ],
      ],
      password: [
        '',
        [
          Validators.required,Validators.minLength(6)

        ],
      ],
      confirPassword: [
        '',
        [
          Validators.required,

        ],
      ],
    },
    {
      //revisar este metodo
      Validators: [this.formUtils.isFieldOneEqualFieldTwo('password', 'confirPassword')],
    }
  );

  onSubmit() {
    console.log("errores del formulario", this.myForm.errors)
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  }


}
