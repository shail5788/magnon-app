import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginRoutingModule } from "./auth-routing.module";
@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [CommonModule, FlexLayoutModule, LoginRoutingModule]
})
export class AuthModule {}
