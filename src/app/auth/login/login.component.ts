import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./../../shared/authservice/auth.service";
import { ToastrManager } from "ng6-toastr-notifications";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  title;
  model = { email: "", password: "" };
  isLogin = false;

  currentUser;
  errors;

  constructor(
    private authService: AuthService,
    private router: Router,
    public toastr: ToastrManager
  ) {}

  ngOnInit() {
    this.title = "LOGIN FORM";
  }
  onSubmit(form) {
    this.authService.authenticate(this.model).subscribe(
      res => {
        this.currentUser = res;

        if (this.currentUser.response) {
          localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
          this.errors = null;
          this.toastr.successToastr("Login successfully", "success");
          setTimeout(function() {
            window.location.href = "file-transfer";
          }, 1000);

          // this.router.navigate(["/dashboard"]);
        }
      },
      err => {
        this.errors = err.error;
        this.toastr.errorToastr(this.errors.message, "Oops!");
        this.router.navigate(["/"]);

        console.log(this.errors);
      }
    );
  }
}
