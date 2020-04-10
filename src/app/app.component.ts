import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import {AuthService} from "./shared/authservice/auth.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  showHeader = false;
  showSidebar = false;
  showFooter = false;
  logginUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private auth:AuthService) {}

  ngOnInit() {
    this.getLoggedInUser();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader =
          this.activatedRoute.firstChild.snapshot.data.showHeader !== false;
        this.showSidebar =
          this.activatedRoute.firstChild.snapshot.data.showSidebar !== false;
        this.showFooter =
          this.activatedRoute.firstChild.snapshot.data.showFooter !== false;
      }
    });
  }
  getLoggedInUser(){
    const loggedUser=  JSON.parse(localStorage.getItem("currentUser"))
   // console.log(loggedUser);
    if(loggedUser!=null){
      console.log(loggedUser);
      if(loggedUser.user.user[0].user_type=="1"){
        this.logginUser=true;
      }else{
        this.logginUser=false;
      }
    }
    
    
  }
}
