import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button-group",
  templateUrl: "./button-group.component.html",
  styleUrls: ["./button-group.component.css"]
})
export class ButtonGroupComponent implements OnInit {
  @Input() user;
  isUser = false;
  isAdmin = false;

  constructor() {}

  ngOnInit() {
    if (this.user.role == "user") {
      this.isUser = true;
    } else if (this.user.role == "admin") {
      this.isAdmin = true;
    }
  }
}
