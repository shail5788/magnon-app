import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserManagementComponent } from "./user-management.component";
import {RolewisePermissionGuard}from "../auth/rolewise-permission.guard";
import {AuthGuard} from "../auth/auth.guard";
const routes:Routes = [
  {
    path: "user-list",
    component: UserManagementComponent,
    data: { showHeader: true, showSidebar: true },
    canActivate: [AuthGuard,RolewisePermissionGuard]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
