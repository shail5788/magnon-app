import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import {UserService} from "../../shared/user.service";
import { map } from 'rxjs/operators';
@Directive({
  selector: '[UniqueEmail]',
  providers:[{provide:NG_ASYNC_VALIDATORS,useExisting:UniqueEmailValidationDirective,multi:true}]
})
export class UniqueEmailValidationDirective implements AsyncValidator {

  constructor(private user:UserService) { }
  validate(c:AbstractControl):Promise<ValidationErrors|null>|Observable<ValidationErrors|null>{
    return this.user.isEmailExist(c.value).pipe(map(data=>{
      
      console.log(data[0])
      if(typeof data[0]!=undefined && typeof data[0]!="undefined"){
         return {'UniqueEmail':true};
      }else{
        return null;
      }
     // return (typeof data[0].id!=undefined && typeof data[0].id!="undefined")?{'UniqueEmail':true}:null
    }))
  }

}
