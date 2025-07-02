import {
  AbstractControl,
  FormArray,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

async function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2500);
  });
}

export class FormUtil {
  //expressiones regulares

  static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';
  static passwordPattern =
    /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).*$/;

  static isValidField(form: FormGroup, fielname: string): boolean | null {
    return form.controls[fielname].errors && form.controls[fielname].touched;
  }

  static isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  static getFieldError(form: FormGroup, fielname: string): string | null {
    if (!form.controls[fielname]) return null;

    const errors = form.controls[fielname].errors ?? {};

    return FormUtil.getTextError(errors);
  }

  static getFieldArrayError(
    formArray: FormArray,
    index: number
  ): string | null {
    if (formArray.controls.length === 0) return null;

    const errors = formArray.controls[index].errors ?? {};

    return FormUtil.getTextError(errors);
  }

  static getTextError(errors: ValidationErrors) {
    for (const key of Object.keys(errors)) {
      switch (key) {

        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Minimo de  ${errors['minlength'].requiredLength} caracteres. `;

        case 'email':
          return `El correo ingresado no es valido`;

        case 'min':
          return `Valor minimo  de  ${errors['min'].min}`;

        case 'emailTaken':
          return `El correo electronico ya esta siendo usado por otro usuario`;

        case 'notStrider':
          return `el nombre de strider es protegido`;

        case 'pattern':
          if (errors['pattern'].requiredPattern === FormUtil.emailPattern) {
            return 'El valor ingresado no parece un email';
          }
          return 'Error de patron contra expression regular';

        default:
          return `Error de validacion no controlado`;
      }
    }
    return null;
  }

  // static isFieldOneEqualFieldTwo(field1: string, field2: string) {
  //   return (formGroup: AbstractControl) => {
  //     const field1Value = formGroup.get(field1)?.value;
  //     const field2Value = formGroup.get(field2)?.value;

  //     return field1Value === field2Value ? null : { passwordsNotEqual: true };
  //   };
  // }

  static isFieldOneEqualFieldTwo(field1: string, field2: string) {
    return (formGroup: AbstractControl) => {
      const field1Value = formGroup.get(field1)?.value;
      const field2Value = formGroup.get(field2)?.value;

      return field1Value === field2Value ? null : { fieldsNotEquals: true };
    };
  }

  static async checkingServerResponse(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    console.log('Validando contra servidor');
    await sleep(); // 2 segundo medio

    const formValue = control.value;

    if (formValue === 'hola@mundo.com') {
      return {
        emailTaken: true,
      };
    }
    return null;
  }

  static notStrider(control: AbstractControl): ValidationErrors | null {
    const formValue = control.value;

    if (formValue === 'strider') {
      return {
        notStrider: true,
      };
    }
    return null;
  }
}
