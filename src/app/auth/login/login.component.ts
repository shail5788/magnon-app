import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  title;
  model = {};
  constructor() {}

  ngOnInit() {
    this.title = "LOGIN FORM";
  }
  onSubmit(form) {
    console.log(this.model);
  }
}
