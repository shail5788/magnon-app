import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getusers() {
    return this.http.get("http://localhost:1200/api/v1/user");
  }
}
