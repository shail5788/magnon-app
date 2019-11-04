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
  changeUserPermission(value, user) {
    const updateUser = {
      isActive: value,
      role: user.role,
      name: user.name,
      email: user.email,
      password: user.password
    };
    return this.http.put(`http://localhost:1200/api/v1/user/${user._id}`, {
      updateUser: updateUser
    });
  }
  changeUserRole(role, user) {
    const updateUser = {
      isActive: user.isActive,
      role: role,
      name: user.name,
      email: user.email,
      password: user.password
    };
    return this.http.put(`http://localhost:1200/api/v1/user/${user._id}`, {
      updateUser: updateUser
    });
  }
  deleteUser(user) {
    const userId = user._id;
    return this.http.delete(`http://localhost:1200/api/v1/user/${userId}`);
  }
}
