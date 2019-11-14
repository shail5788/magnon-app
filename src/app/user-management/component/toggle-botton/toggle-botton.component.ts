import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-toggle-botton",
  templateUrl: "./toggle-botton.component.html",
  styleUrls: ["./toggle-botton.component.css"]
})
export class ToggleBottonComponent implements OnInit {
  @Output() changed = new EventEmitter<boolean>();
  @Input() user;
  isActivated = false;
  constructor() {}

  ngOnInit() {
    // console.log(this.user);
    if (this.user.isActive) {
      this.isActivated = true;
    } else {
      this.isActivated = false;
    }
  }
}
