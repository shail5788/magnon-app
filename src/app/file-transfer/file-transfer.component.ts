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
  fileInfo = { name: "", size: 0 };
  fileSizeUnit = "MB";
  ngOnInit() {}
  onSelectFile(event) {
    this.model.file = event.target.files[0];
    const files = event.target.files[0];
    this.getFile = files;
    console.log(this.getFile);
    this.fileInfo.name = this.getFile.name;
    this.fileInfo.size = this.getFile.size / 1024 / 1024;
    if (this.fileInfo.size > 1024) {
     this.fileInfo.size = this.fileInfo.size / 1024;
      this.fileSizeUnit = "GB";
    }
    console.log(this.fileInfo);
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
