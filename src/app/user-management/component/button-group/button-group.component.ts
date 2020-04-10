import { Component, OnInit, Input ,OnChanges} from "@angular/core";

@Component({
  selector: "app-button-group",
  templateUrl: "./button-group.component.html",
  styleUrls: ["./button-group.component.css"]
})
export class ButtonGroupComponent implements OnInit,OnChanges {
  @Input() user;
  @Input() isActiveUser;
  @Input() isAdminUser;
  isUser = false;
  isAdmin =false;
  constructor() {}

  ngOnInit() {
    console.log("nginit")
    if (this.user.user_type == "2") {
      this.isUser = true;
      this.isAdmin=false;
    } else if (this.user.user_type == "1") {
      this.isAdmin = true;
      this.isUser=false;
    }
  }
  ngOnChanges(){
   console.log("shailendra verma")
   if (this.user.user_type == "2") {
     
      this.isUser = false;
      this.isAdmin=true;
      console.log("admin-",this.isAdmin,"--user--",this.isUser)
    } else if (this.user.user_type == "1") {
      console.log("verma")
      this.isAdmin = false;
      this.isUser=true;
      console.log("user-",this.isUser,"--admin--",this.isAdmin)
    }
  }
}
