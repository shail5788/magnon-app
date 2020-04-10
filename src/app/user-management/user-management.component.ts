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
  isAdmin=false;
  isUser=false;
  createModelOpen = false;
  createUserTitle = "Create User";
  popSetting = {
    title: "Create User",
    formRef: "CreateForm",
    button: "Creat user"
  };
  createModelActive=false;
  EditUserTitle = "Edit User";
  userInfo;
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();
  checked: boolean;
  newUserModalOpen: boolean=false;
  constructor(private users: UserService, public toastr: ToastrManager) {}

  
  ngOnInit() {
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 2
    };
   
    this.users.getusers().subscribe(res => {
      this.persons = res;
      console.log(this.persons);
      this.dtTrigger.next();
    });
  
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
          if (this.response.result) {
            this.toastr.successToastr(textMessage, "success");
          }
        },
        err => {}
      );
    }
  }
  changeRole(event, person) {
    console.log(event)
    if (event.target.innerText == "Admin") {
      console.log("admin--");
      this.role = "1";
    } else if (event.target.innerText == "User") {
      console.log("user")
       this.role = "2";
    }
    console.log("role--",this.role);
    if (confirm("Are You want to change role?")) {
      if(this.role=="1"){
        this.isAdmin=true;
        this.isUser=false;
      }else{
        this.isAdmin=false;
        this.isUser=true;
      }
      this.users.changeUserRole(this.role, person).subscribe(
        res => {
          this.response = res;
         console.log(this.response)
          if (this.response.result) {
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

  // openCreateModal(event) {
  
  //   this.createModelOpen = true;
  //   this.createModelActive=true;
  // }
  openCreateUserModal($event){
    this.newUserModalOpen=true;
  }
  editOpenModal() {
    this.createModelActive=false;
    this.createModelOpen = true;
  }

  closeCreateModal() {
    this.createModelOpen = false;
  }
  closeNewUserModal(){
    this.newUserModalOpen=false;
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
