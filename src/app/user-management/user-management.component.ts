import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ElementRef
} from "@angular/core";
import * as $ from "jquery";
import "datatables.net";
import { Subject } from "rxjs";
import { UserService } from "./../shared/user.service";
import { ToastrManager } from "ng6-toastr-notifications";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.css"]
})
export class UserManagementComponent implements OnDestroy, OnInit {
  @ViewChild("dataTable") table: ElementRef;
  dataTable: any;

  dtOptions: DataTables.Settings = {};
  persons: any;
  response;
  role;
  createModelOpen = false;
  createUserTitle = "Create User";
  popSetting = {
    title: "Create User",
    formRef: "CreateForm",
    button: "Creat user"
  };
  EditUserTitle = "Edit User";
  userInfo;
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();
  checked: boolean;
  constructor(private users: UserService, public toastr: ToastrManager) {}

  ngOnInit() {
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 2
    };
    this.users.getusers().subscribe(res => {
      this.persons = res;
      //  console.log(this.persons.data);
      this.dtTrigger.next();
    });
    // this.dataTable = $(this.table.nativeElement);
    // this.dataTable.dataTable({
    //   ajax: "http://localhost:1200/api/v1/user",
    //   columns: [
    //     { data: "name" },
    //     { data: "email" },
    //     { data: "isActive" },
    //     { data: "role" }
    //   ]
    // });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  changeStatus(event, user) {
    var textMessage;
    if (event) {
      textMessage = "User has activated successfully";
    } else {
      textMessage = "User has deactivated successfully";
    }
    if (confirm("Are you sure you want to activate ")) {
      this.users.changeUserPermission(event, user).subscribe(
        res => {
          this.response = res;
          if (this.response.response) {
            this.toastr.successToastr(textMessage, "success");
          }
        },
        err => {}
      );
    }
  }
  changeRole(event, person) {
    if (event.target.innerText == "Admin") {
      this.role = "admin";
    } else if (event.target.innerText == "User") {
      this.role = "user";
    }
    if (confirm("Are You want to change role?")) {
      this.users.changeUserRole(this.role, person).subscribe(
        res => {
          this.response = res;

          if (this.response.response) {
            this.toastr.successToastr(
              "User role has been updated successfully",
              "success"
            );
          }
        },
        err => {}
      );
    }
  }
  afterDelete(event) {
    this.persons = event;
  }

  openCreateModal() {
    this.createModelOpen = true;
  }
  editOpenModal() {
    this.createModelOpen = true;
  }

  closeCreateModal() {
    this.createModelOpen = false;
  }

  getNewUserList(event) {
    // console.log(event);
    this.persons = event;
  }
  getDataEditModal(event) {
    this.userInfo = event;
    this.users.setCurrentUser(this.userInfo);
  }
}
