import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-file-operation',
  templateUrl: './file-operation.component.html',
  styleUrls: ['./file-operation.component.css']
})
export class FileOperationComponent implements OnInit {
 @Input() file;
 isResendModalOpen:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  
  openResendModal(event){
    this.isResendModalOpen=true;
  }
  closeResendModal(event){
    
    this.isResendModalOpen=false;
 
  }

  priview_file(event,file){
  
    window.open(file.preview_path, "_blank");
  }
  resend_edm(event,file){


  }

}
