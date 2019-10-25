import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserManagementComponent } from "./user-management.component";
import { DataTablesModule } from "angular-datatables";
import { UserRoutingModule } from "./user-routing.module";
import { UserService } from "./../shared/user.service";
import { ToggleBottonComponent } from './component/toggle-botton/toggle-botton.component';
import { ButtonGroupComponent } from './component/button-group/button-group.component';
@NgModule({
  declarations: [UserManagementComponent, ToggleBottonComponent, ButtonGroupComponent],
  imports: [CommonModule, UserRoutingModule, DataTablesModule],
  providers: [UserService]
})
export class UserModule {}
