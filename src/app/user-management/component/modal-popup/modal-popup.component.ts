import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-modal-popup",
  templateUrl: "./modal-popup.component.html",
  styleUrls: ["./modal-popup.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ModalPopupComponent implements OnInit {
  @Input() setting;
  @Output() close = new EventEmitter<void>();
  userData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    type: ""
  };
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  closePopUp() {
    this.close.emit();
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  userOperation(form) {
    this.userData.type = this.setting.button;
    console.log(form);
    console.log(this.userData);
  }
}
