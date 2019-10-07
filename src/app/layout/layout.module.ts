import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from "./../shared/authservice/auth.service";
@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule],
  providers: [AuthService],
  exports: [FooterComponent, HeaderComponent, SidebarComponent]
})
export class LayoutModule {}
