import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

@Injectable({
    providedIn: "root",
})
export class validityForm {
    createPasswordStrengthValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;

            if (!value) {
                return null;
            }

            const hasUpperCase = /[A-Z]+/.test(value);

            const hasLowerCase = /[a-z]+/.test(value);

            const hasNumeric = /[0-9]+/.test(value);

            const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

            return !passwordValid ? { passwordStrength: true } : null;
        };
    }

    onlyTextValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (!value) {
                return null;
            }

            const hasOnlyLetter =
                /^[a-zA-Z- áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸ\-ÆŒs]{2,15}$/.test(value);

            const textValid = hasOnlyLetter;

            return !textValid
                ? {
                      isNumeric: true,
                  }
                : null;
        };
    }

    emailValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (!value) {
                return null;
            }

            const email = /[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.test(value);

            const emailValid = email;

            return !emailValid
                ? {
                      emailMatch: true,
                  }
                : null;
        };
    }


    emailMatchValidator(main:string, confirm:string):ValidatorFn {
        return(ctrl: AbstractControl): null | ValidationErrors => {
            if (!ctrl.get(main) || !ctrl.get(confirm)) {
                return {
                  confirmEqual: 'Invalid control name',
                };
              }
          
              const mainValue = ctrl.get(main)!.value;
              const confirmValue = ctrl.get(confirm)!.value
              return mainValue === confirmValue ? null : {
                  confirmEqual : {
                      main : mainValue,
                      confirm : confirmValue
                  }
              }
        }
    }

}
