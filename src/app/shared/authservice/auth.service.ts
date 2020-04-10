import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  redirectUrl: string;

  //url="http://ec2-13-234-37-40.ap-south-1.compute.amazonaws.com:1200";
  url = "http://staging1.delivery-projects.com/edm-transfer-api/api/v1/user"; //"https://magnon-api.herokuapp.com";
  constructor(private http: HttpClient, private router: Router) {}

  authenticate(userInfo) {
    let headers = new HttpHeaders ();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'Origin')
    return this.http.post(this.url + "/login", userInfo,{headers:headers});//signin
  }
  isLoggedIn() {
   
    if (localStorage.getItem("currentUser")) {
     return true;
    }
    return false;
  }
  isAdmin() {
    const loginUser = JSON.parse(localStorage.getItem("currentUser"));
    // console.log(loginUser.user.user.role);
    if (loginUser.user.user[0].user_type == "1") {
      return true;
    } else {
      return false;
    }
  }
  getLoggedInUser() {
    
    const loginUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(loginUser);
    return loginUser;
  }
 
  logout() {
    localStorage.removeItem("currentUser");
    this.router.navigate(["/login"]);
  }
  
}
