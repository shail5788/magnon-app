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
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {

  @Input() setting;
  @Input() createModelActive;

  @Output() close = new EventEmitter<void>();
  @Output() getUpdateUserData = new EventEmitter<any>();
  allUser;
  addUserData = {
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
    // this.addUserData = this.users.getCurrentUser();
    // this.currentUser = this.users.getCurrentUser();
    
  }

  closePopUp() {
    this.close.emit();
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  addUser(formObj) {
    // this.addUserData.type = this.setting.button;
      this.addUserData.name=formObj.value.uname;
      this.addUserData.email=formObj.value.uemail;
      this.addUserData.password=formObj.value.upassword;
      this.addUserData.user_type=formObj.value.role;
      this.users.createUser(this.addUserData).subscribe(
        res => {
          //console.log(res);
          this.tostr.successToastr("User Created successfully", "success");
          this.getUpdateUsersData(data => {
            //console.log(data);
            this.getUpdateUserData.emit(data);
            formObj.form.reset();
            this.close.emit();
          });
        },
        err => {
         console.log(err);
          if (err.error.error.code == "11000") {
            this.tostr.errorToastr(
              "Sorry! This email is already exist",
              "Opps!"
            );
          }
        }
      );
      
     
    
  }
  getUpdateUsersData(callback) {
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
