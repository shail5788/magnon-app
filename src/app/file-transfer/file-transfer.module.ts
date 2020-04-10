import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FileTransferComponent } from "./file-transfer.component";
import { FileTranserRoutingModule } from "./file-transfer.route.module";
import { AuthGuard } from "../auth/auth.guard";
import { FileUploadService } from "../shared/file-upload.service";
import { FileDashboardComponent } from './components/file-dashboard/file-dashboard.component';
import { FileOperationComponent } from './components/file-operation/file-operation.component';
import { ResendModalComponent } from './components/resend-modal/resend-modal.component';
@NgModule({
  declarations: [FileTransferComponent, FileDashboardComponent, FileOperationComponent, ResendModalComponent],
  imports: [FileTranserRoutingModule, FormsModule, CommonModule],
  providers: [AuthGuard, FileUploadService]
})
export class FileTransferModule {}
