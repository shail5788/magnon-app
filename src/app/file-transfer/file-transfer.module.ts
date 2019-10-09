import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FileTransferComponent } from "./file-transfer.component";
import { FileTranserRoutingModule } from "./file-transfer.route.module";
import { AuthGuard } from "../auth/auth.guard";
import { FileUploadService } from "../shared/file-upload.service";
@NgModule({
  declarations: [FileTransferComponent],
  imports: [FileTranserRoutingModule, FormsModule, CommonModule],
  providers: [AuthGuard, FileUploadService]
})
export class FileTransferModule {}
