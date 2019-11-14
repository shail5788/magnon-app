import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  redirectUrl: string;
  //old url=http://ec2-13-233-149-86.ap-south-1.compute.amazonaws.com
  url="http://ec2-13-234-37-40.ap-south-1.compute.amazonaws.com:1200";
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
  logout() {
    localStorage.removeItem("currentUser");
    this.router.navigate(["/login"]);
  }
}
