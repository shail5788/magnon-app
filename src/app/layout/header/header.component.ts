import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../../shared/authservice/auth.service";
import { ToastrManager } from "ng6-toastr-notifications";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, public toastr: ToastrManager) {}

  ngOnInit() {}
  logout() {
    console.log("logout");
    this.toastr.successToastr("Logout successfuly", "Success");
    setTimeout(() => {
      this.authService.logout();
    }, 1000);
  }
}
