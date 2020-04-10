import { Component, OnInit } from '@angular/core';
import {FileUploadService} from '../../../shared/file-upload.service';

@Component({
  selector: 'app-file-dashboard',
  templateUrl: './file-dashboard.component.html',
  styleUrls: ['./file-dashboard.component.css']
})
export class FileDashboardComponent implements OnInit {
  files;
  constructor(private fileService:FileUploadService) { }

  ngOnInit() {

      this.fileService.getAllfiles().subscribe(
        res=>{
          this.files=res;
          console.log(this.files)
        }
        ,err=>{console.log(err)})
  }

}
