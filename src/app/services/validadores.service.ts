import { Injectable } from '@angular/core';
import { AbstractControl, ControlContainer, Form, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate{
  [s:string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor( ) { }


passwordsIguales(control: AbstractControl ): ValidationErrors | null {
  const pass1 = control.get('pass1')?.value;
  const pass2 = control.get('pass2')?.value;
  if (pass1 !== pass2) {
      control.get(pass2)?.setErrors({ noIguales: true });
      return { noIguales: true };
  }
  return null;
}

existeUsuario(control: FormControl): Promise<ErrorValidate> | Observable<ErrorValidate> {
if ( !control.value){
  return Promise.resolve(null);
}
  return new Promise ((resolve, reject) => {
  setTimeout(() =>{
    if ( control.value === 'strider'){
      resolve({ existe: true})
    }else{
      resolve (null);
    }
  }, 3500);
});
}
}
