import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  authenticate(userInfo){
      this.http.post("localhost:1200/login",userInfo).subscribe(res=>{
        console.log(res);
      },
      err=>{console.log(err)})
  }
}
