import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { UserService } from "./../../../shared/user.service";
import { ToastrManager } from "ng6-toastr-notifications";
@Component({
  selector: "app-operation-button",
  templateUrl: "./operation-button.component.html",
  styleUrls: ["./operation-button.component.css"]
})
export class OperationButtonComponent implements OnInit {
  @Input() user;
  modelOpen = false;
  popTitle = "Edit User";
  popSetting = {
    title: "Edit User",
    formRef: "EditForm",
    button: "Update User"
  };
  updateData: any;
  @Output() updatedDataEvent = new EventEmitter<any>();
  @Output() getDataForEditModal = new EventEmitter<any>();
  response;
  constructor(private users: UserService, public toastr: ToastrManager) {}

  ngOnInit() {}
  UserDetail(event, user) {}
  removeUser(event, user) {
    if (confirm("Are you sure that you to delete  ")) {
          this.users.deleteUser(user).subscribe(
            res => {
              this.response = res;
              console.log(this.response);
              this.users.getusers().subscribe(
                res => {
                  this.updateData = res;
                  this.updatedDataEvent.emit(this.updateData);
                },
                err => {}
              );
            },
            err => {}
          );
    }
  }
  openModel(event, user) {
    this.modelOpen = true;
    // console.log(user);
    this.getDataForEditModal.emit(user);
  }
  closeEditModal() {
    this.modelOpen = false;
  }
}
