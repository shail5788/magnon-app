import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "../../../shared/user.service";
import { ToastrManager } from "ng6-toastr-notifications";
@Component({
  selector: "app-modal-popup",
  templateUrl: "./modal-popup.component.html",
  styleUrls: ["./modal-popup.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ModalPopupComponent implements OnInit {
  @Input() setting;
  @Input() createModelActive;

  @Output() close = new EventEmitter<void>();
  @Output() updateUser = new EventEmitter<any>();
  allUser;
  userData = {
    name: "",
    email: "",
    password: "",
    // confirmPassword: "",
    user_type: "",
  //  type: ""
  };
  userList;
  newUser;
  currentUser;
  constructor(
    private modalService: NgbModal,
    private users: UserService,
    public tostr: ToastrManager
  ) {}

  ngOnInit() {
    this.userData = this.users.getCurrentUser();
    this.currentUser = this.users.getCurrentUser();
    
  }

  closePopUp() {
    this.close.emit();
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  userOperation(formObj) {
    // this.userData.type = this.setting.button;
    
 
    if (this.setting.button == "Creat user") {
      //console.log("shaiendra verma")
      
      this.userData.name=formObj.value.uname;
      this.userData.email=formObj.value.uemail;
      this.userData.password=formObj.value.upassword;
      this.userData.user_type=formObj.value.role;
     // console.log(this.userData)
      
      this.users.createUser(this.userData).subscribe(
        res => {
          //console.log(res);
          this.tostr.successToastr("User Created successfully", "success");
          this.getUpdateUserData(data => {
            //console.log(data);
            this.updateUser.emit(data);
            formObj.form.reset();
            this.close.emit();
          });
        },
        err => {
        //  console.log(err.error.error);
          if (err.error.error.code == "11000") {
            this.tostr.errorToastr(
              "Sorry! This email is already exist",
              "Opps!"
            );
          }
        }
      );
    } else {
      console.log("sadf");
      this.users.updateUser(this.currentUser, this.currentUser.id).subscribe(
        res => {
          console.log(res);
          this.tostr.successToastr("User updated successfully", "success");
          this.getUpdateUserData(data => {
            console.log(data);
            this.updateUser.emit(data);
            //formObj.form.reset();
            this.close.emit();
          });
        },
        err => {
          console.log(err.error.error);
        }
      );
    }
  }
  getUpdateUserData(callback) {
    this.users.getusers().subscribe(
      res => {
        this.allUser = res;
        console.log(this.allUser);
        callback(this.allUser);
      },
      err => {}
    );
  }
}
