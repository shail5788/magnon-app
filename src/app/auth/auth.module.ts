import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginRoutingModule } from "./auth-routing.module";
import { AuthService } from "../shared/authservice/auth.service";
@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [CommonModule, FlexLayoutModule, LoginRoutingModule, FormsModule],
  providers: [AuthService]
})
export class AuthModule {}
