import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-gradiant-card",
  templateUrl: "./gradiant-card.component.html",
  styleUrls: ["./gradiant-card.component.css"]
})
export class GradiantCardComponent implements OnInit {
  @Input() prodDetail;

  constructor() {}

  ngOnInit() {}
}
