import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FileTransferComponent } from "./file-transfer.component";
import { FileTranserRoutingModule } from "./file-transfer.route.module";
@NgModule({
  declarations: [FileTransferComponent],
  imports: [FileTranserRoutingModule]
})
export class FileTransferModule {}
