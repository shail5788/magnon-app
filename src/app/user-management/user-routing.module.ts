import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserManagementComponent } from "./user-management.component";
const routes = [
  {
    path: "user-list",
    component: UserManagementComponent,
    data: { showHeader: true, showSidebar: true }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
