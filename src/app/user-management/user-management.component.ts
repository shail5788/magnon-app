import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ElementRef
} from "@angular/core";
import * as $ from "jquery";
import "datatables.net";
import { Subject } from "rxjs";
import { UserService } from "./../shared/user.service";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.css"]
})
export class UserManagementComponent implements OnDestroy, OnInit {
  @ViewChild("dataTable") table: ElementRef;
  dataTable: any;

  dtOptions: DataTables.Settings = {};
  persons: any;
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();
  checked: boolean;
  constructor(private users: UserService) {}

  ngOnInit() {
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 2
    };
    this.users.getusers().subscribe(res => {
      this.persons = res;
      console.log(this.persons.data);
      this.dtTrigger.next();
    });
    // this.dataTable = $(this.table.nativeElement);
    // this.dataTable.dataTable({
    //   ajax: "http://localhost:1200/api/v1/user",
    //   columns: [
    //     { data: "name" },
    //     { data: "email" },
    //     { data: "isActive" },
    //     { data: "role" }
    //   ]
    // });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  changeStatus(event) {
    console.log(event);
  }
}
