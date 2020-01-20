import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts";
import { DashboardComponentComponent } from "./dashboard-component/dashboard-component.component";
import { DashboardRoutingModule } from "./dashboard.route.module";
import { GradiantCardComponent } from "./gradiant-card/gradiant-card.component";

import { AuthGuard } from "../auth/auth.guard";
@NgModule({
  declarations: [DashboardComponentComponent, GradiantCardComponent],
  imports: [CommonModule, DashboardRoutingModule, ChartsModule],
  providers: [AuthGuard]
})
export class DashboardModule {}
