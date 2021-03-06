import { Component, OnInit } from "@angular/core";
import { FileUploadService } from "../shared/file-upload.service";
import { ToastrManager } from "ng6-toastr-notifications";

@Component({
  selector: "app-file-transfer",
  templateUrl: "./file-transfer.component.html",
  styleUrls: ["./file-transfer.component.css"]
})
export class FileTransferComponent implements OnInit {
  getFile;
  constructor(private fs: FileUploadService, public toastr: ToastrManager) {}
  model = { file: File, email: "", subject: "", quality: false, litmus: false };
  fileUpload = { status: "", message: "", filePath: "" };
  fileInfo = { name: "", size: 0 };
  fileSizeUnit = "MB";
  previewLink;
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
  onSubmit(form, formRef) {
    const formData = new FormData();
    
    const currentUser=JSON.parse(localStorage.getItem("currentUser"));
    const loggedInUser=currentUser.user.user[0];
    delete loggedInUser.password;
    
    
    formData.append("file", this.getFile);
    formData.append("email", this.model.email);
    formData.append("subject", this.model.subject);
    formData.append("quality", JSON.stringify(this.model.quality));
    formData.append("litmus", JSON.stringify(this.model.litmus));
    formData.append("loggedInUser",JSON.stringify(loggedInUser));
    
    
    
    this.fs.upload(formData).subscribe(
      res => {
        this.fileUpload = res;
     
       // console.log(res);
        if (typeof res != "undefined" && typeof res != undefined) {
          if (res.message == 100) {
            this.toastr.successToastr("EDM has been shared", "success");
          }
        }
      //  console.log(res.result);
        if (typeof res != "undefined" && typeof res != undefined) {
          setTimeout(()=>{
              
            if(typeof res.result!=undefined && typeof res.result!="undefined"){
              console.log(res.result);
              this.previewLink = res.result.preview_url;
              console.log(this.previewLink);
            }
            
          },25000)
         
        }
        setTimeout(() => {
         // formRef.resetForm();

        //  this.fileInfo.name = "";
         // this.fileInfo.size = 0;
        }, 1000);
      },
      err => {
        console.log(err);
      }
    );
   
  }
}
