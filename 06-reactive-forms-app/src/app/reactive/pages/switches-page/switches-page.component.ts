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
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrls: ['./switches-page.component.css'],
})
export class SwitchesPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  private fb = inject(FormBuilder);

  formUtil = FormUtil;

  myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotificacion: [true],
    termAndConditions: [false, Validators.requiredTrue],
  });

  onSubmit() {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  }
}
