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
import { FormGroup } from '@angular/forms';

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

  myForm: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.pattern(this.formUtils.namePattern)],
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(this.formUtils.emailPattern)],
    ],
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(this.formUtils.notOnlySpacesPattern),
      ],
    ],
    password: [
      '',
      [Validators.required, Validators.pattern(this.formUtils.passwordPattern)],
    ],
    password2: [
      '',
      [Validators.required, Validators.pattern(this.formUtils.passwordPattern)],
    ],
  });

  onSubmit() {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  }

  isFieldOneEqualFieldTwo(field1: string, field2: string) {
    return (formGroup: AbstractControl) => {
      const field1Value = formGroup.get(field1)?.value;
      const field2Value = formGroup.get(field2)?.value;

      return field1Value === field2Value ? null : { passwordsNotEqual: true };
    };
  }
}
