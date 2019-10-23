import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as $ from "jquery";
import "datatables.net";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.css"]
})
export class UserManagementComponent implements OnInit {
  @ViewChild("dataTable") table: ElementRef;
  dataTable: any;
  constructor() {}

  ngOnInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.dataTable();
  }
}
