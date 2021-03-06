import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { UserManagementComponent } from "./user-management.component";
import { DataTablesModule } from "angular-datatables";
import { UserRoutingModule } from "./user-routing.module";
import { UserService } from "./../shared/user.service";
import { ToggleBottonComponent } from "./component/toggle-botton/toggle-botton.component";
import { ButtonGroupComponent } from "./component/button-group/button-group.component";
import { OperationButtonComponent } from "./component/operation-button/operation-button.component";
import { ModalPopupComponent } from "./component/modal-popup/modal-popup.component";
import {AuthGuard} from "../auth/auth.guard";
import {RolewisePermissionGuard}from "../auth/rolewise-permission.guard";
import {TokenInterceptorService} from "../shared/token-interceptor.service";
import { CreateModalComponent } from './component/create-modal/create-modal.component';
import { UniqueEmailValidationDirective } from './component/unique-email-validation.directive';
@NgModule({
  declarations: [
    UserManagementComponent,
    ToggleBottonComponent,
    ButtonGroupComponent,
    OperationButtonComponent,
    ModalPopupComponent,
    CreateModalComponent,
    UniqueEmailValidationDirective
  ],
  imports: [CommonModule, UserRoutingModule, DataTablesModule, FormsModule],
  providers: [UserService,AuthGuard,RolewisePermissionGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ]
})
export class UserModule {}
