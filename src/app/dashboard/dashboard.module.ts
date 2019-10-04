import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts";
import { DashboardComponentComponent } from "./dashboard-component/dashboard-component.component";
import { DashboardRoutingModule } from "./dashboard.route.module";
import { GradiantCardComponent } from "./gradiant-card/gradiant-card.component";
import { BarGraphComponent } from "./bar-graph/bar-graph.component";
@NgModule({
  declarations: [
    DashboardComponentComponent,
    GradiantCardComponent,
    BarGraphComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, ChartsModule]
})
export class DashboardModule {}
