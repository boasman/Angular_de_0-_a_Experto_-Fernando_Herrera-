import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
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

  formUtil = FormUtil;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(0)]],
    password2: ['', [Validators.required]],
  });



  onSubmit() {
    console.log(this.myForm.value);
  }
}
