import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class UserService {
  // url="http://ec2-13-234-37-40.ap-south-1.compute.amazonaws.com:1200";
  url = "http://staging1.delivery-projects.com/edm-transfer-api";//"https://magnon-api.herokuapp.com";
  userData = {
    name: "",
    email: "",
    password: "",
    // confirmPassword: "",
    user_type: "",
    //type: ""
  };
  constructor(private http: HttpClient) {}

  getusers() {
    return this.http.get(this.url + "/api/v1/user/get-all-user");
  }
  changeUserPermission(value, user) {
    const updateUser = {
      id:user.id,
      active: value,
      user_type: user.user_type,
      name: user.name,
      email: user.email,
      password: user.password
    };
    return this.http.put(`${this.url}/api/v1/user/edit-user`, {
      updateUser: updateUser
    });
  }
  changeUserRole(role, user) {
    console.log("role--",role)
    const updateUser = {
      id:user.id,
      active: user.active,
      user_type: role,
      name: user.name,
      email: user.email,
      password: user.password
    };
    console.log("updateUser",updateUser)
    return this.http.put(`${this.url}/api/v1/user/edit-user`, {
      updateUser: updateUser
    });
  }
  deleteUser(user) {
    const userId = user.id;
    return this.http.delete(`${this.url}/api/v1/user/delete-user/${userId}`);
  }
  createUser(user) {

    return this.http.post(`${this.url}/api/v1/user/create-user`, { user });
  }
  updateUser(user, id) {
    let updateUser={};
    user.id=id;
    updateUser=user;
    return this.http.put(`${this.url}/api/v1/user/edit-user`, { updateUser });
  }
  setCurrentUser(currentUser) {
    this.userData = currentUser;
  }
  getCurrentUser() {
    return this.userData;
  }
   
  isEmailExist(email){

       return this.http.post(this.url + "/api/v1/user/unique-email",{email});
  }

}
