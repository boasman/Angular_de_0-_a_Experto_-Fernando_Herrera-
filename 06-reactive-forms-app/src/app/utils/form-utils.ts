import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtil {
  //expressiones regulares

  static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';
  static passwordPattern = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).*$/;

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

        case 'pattern':
          if(errors['pattern'].requiredPattern === FormUtil.emailPattern){
            return 'El valor ingresado no parece un email'
          }
          return 'Error de patron contra expression regular';

          default:
            return `Error de validacion no controlado`;
      }
    }
    return null;
  }
}
