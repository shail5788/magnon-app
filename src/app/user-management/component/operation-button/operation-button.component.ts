import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "./../../../shared/user.service";
import { ToastrManager } from "ng6-toastr-notifications";
@Component({
  selector: "app-operation-button",
  templateUrl: "./operation-button.component.html",
  styleUrls: ["./operation-button.component.css"]
})
export class OperationButtonComponent implements OnInit {
  @Input() user;
  response;
  constructor(private users: UserService, public toastr: ToastrManager) {}

  ngOnInit() {}
  UserDetail(event, user) {
    console.log(event, user);
  }
  removeUser(event, user) {
    console.log(event, user);
    this.users.deleteUser(user).subscribe(
      res => {
        this.response = res;
        console.log(this.response);
      },
      err => {}
    );
  }
}
