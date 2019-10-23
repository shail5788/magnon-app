import { Component, OnInit } from "@angular/core";
import { FileUploadService } from "../shared/file-upload.service";

@Component({
  selector: "app-file-transfer",
  templateUrl: "./file-transfer.component.html",
  styleUrls: ["./file-transfer.component.css"]
})
export class FileTransferComponent implements OnInit {
  getFile;
  constructor(private fs: FileUploadService) {}
  model = { file: File, email: "", subject: "", quality: false, litmus: false };
  fileUpload = { status: "", message: "", filePath: "" };
  ngOnInit() {}
  onSelectFile(event) {
    console.log(event);
    this.model.file = event.target.files[0];
    const files = event.target.files[0];
    this.getFile = files;
  }
  onSubmit(form) {
    const formData = new FormData();
    formData.append("file", this.getFile);
    formData.append("email", this.model.email);
    formData.append("subject", this.model.subject);
    formData.append("quality", JSON.stringify(this.model.quality));
    formData.append("litmus", JSON.stringify(this.model.litmus));
    this.fs.upload(formData).subscribe(
      res => {
        this.fileUpload = res;
        form.reset();
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    console.log(form);
    console.log(this.model);
  }
}
