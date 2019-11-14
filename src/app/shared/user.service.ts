import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class UserService {
  url="http://ec2-13-234-37-40.ap-south-1.compute.amazonaws.com:1200";
  constructor(private http: HttpClient) {}

  getusers() {
    return this.http.get(this.url+"/api/v1/user");
  }
  changeUserPermission(value, user) {
    const updateUser = {
      isActive: value,
      role: user.role,
      name: user.name,
      email: user.email,
      password: user.password
    };
    return this.http.put(`${this.url}/api/v1/user/${user._id}`, {
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
    return this.http.put(`${this.url}/api/v1/user/${user._id}`, {
      updateUser: updateUser
    });
  }
  deleteUser(user) {
    const userId = user._id;
    return this.http.delete(`${this.url}/api/v1/user/${userId}`);
  }
  createUser(user) {
    return this.http.post(`${this.url}/api/v1/user`, { user });
  }
}
