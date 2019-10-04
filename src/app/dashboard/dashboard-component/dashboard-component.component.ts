import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard-component",
  templateUrl: "./dashboard-component.component.html",
  styleUrls: ["./dashboard-component.component.css"]
})
export class DashboardComponentComponent implements OnInit {
  public myProdInfo: Array<object> = [
    {
      id: 1,
      title: "Products Sold",
      value: "4565",
      date: "Jan - March 2019",
      gclass: "gradient-1",
      faClass: "fa fa-shopping-cart"
    },
    {
      id: 2,
      title: "Net Profit",
      value: "$8541",
      date: "Jan - March 2019",
      gclass: "gradient-2",
      faClass: "fa fa-money"
    },
    {
      id: 3,
      title: "New Customer",
      value: "8934",
      date: "Jan - March 2019",
      gclass: "gradient-3",
      faClass: "fa fa-users"
    },
    {
      id: 4,
      title: "Customer Satisfaction",
      value: "90%",
      date: "Jan - March 2019",
      gclass: "gradient-4",
      faClass: "fa fa-heart"
    }
  ];
  constructor() {}

  ngOnInit() {
    console.log(this.myProdInfo);
  }
}
