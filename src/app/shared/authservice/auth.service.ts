import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  redirectUrl: string;
  
  //url="http://ec2-13-234-37-40.ap-south-1.compute.amazonaws.com:1200";
  url="http://localhost:1200";
  constructor(private http: HttpClient, private router: Router) {}

  authenticate(userInfo) {
    return this.http.post(
      this.url+"/signin",
      userInfo
    );
  }
  isLoggedIn() {
    if (localStorage.getItem("currentUser")) {
      return true;
    }
    return false;
  }
  isAdmin(){
    
    const loginUser=JSON.parse(localStorage.getItem("currentUser"))
    // console.log(loginUser.user.user.role);
    if(loginUser.user.user.role=="admin"){
      return true;
    }else{
      return false;
    }
    
   
  }
  getLoggedInUser(){
    const loginUser=JSON.parse(localStorage.getItem("currentUser"))
    return loginUser;
  }
  logout() {
    localStorage.removeItem("currentUser");
    this.router.navigate(["/login"]);
  }
}
