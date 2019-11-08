import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UserManagementComponent } from "./user-management.component";
import { DataTablesModule } from "angular-datatables";
import { UserRoutingModule } from "./user-routing.module";
import { UserService } from "./../shared/user.service";
import { ToggleBottonComponent } from "./component/toggle-botton/toggle-botton.component";
import { ButtonGroupComponent } from "./component/button-group/button-group.component";
import { OperationButtonComponent } from "./component/operation-button/operation-button.component";
import { ModalPopupComponent } from "./component/modal-popup/modal-popup.component";
@NgModule({
  declarations: [
    UserManagementComponent,
    ToggleBottonComponent,
    ButtonGroupComponent,
    OperationButtonComponent,
    ModalPopupComponent
  ],
  imports: [CommonModule, UserRoutingModule, DataTablesModule, FormsModule],
  providers: [UserService]
})
export class UserModule {}
