import { Component, OnInit } from "@angular/core";
import { FileUpload } from "../models/upload.model";

@Component({
  selector: "app-file-transfer",
  templateUrl: "./file-transfer.component.html",
  styleUrls: ["./file-transfer.component.css"]
})
export class FileTransferComponent implements OnInit {
  constructor() {}
  model = { file: File, email: "", subject: "", quality: false, litmus: false };

  ngOnInit() {}
  onSelectFile(event) {
    console.log(event);
    this.model.file = event.target.files[0];
  }
  onSubmit(form) {
    console.log(form);
    console.log(this.model);
  }
}
