import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { DashboardComponentComponent } from "./dashboard-component/dashboard-component.component";
const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponentComponent,
    data: { showHeader: true, showSidebar: true },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
