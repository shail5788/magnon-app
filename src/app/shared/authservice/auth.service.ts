import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  redirectUrl: string;
  constructor(private http: HttpClient, private router: Router) {}

  authenticate(userInfo) {
    return this.http.post("http://localhost:1200/signin", userInfo);
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
