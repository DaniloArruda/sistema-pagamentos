import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-expandable-menu-button",
  templateUrl: "./expandable-menu-button.component.html",
  styleUrls: ["./expandable-menu-button.component.css"]
})
export class ExpandableMenuButtonComponent implements OnInit, AfterViewInit {
  isExpanded: boolean;

  constructor() {
    console.log("lala");
  }

  ngOnInit() {
    console.log("lele");
  }

  ngAfterViewInit() {
    console.log("lili");
  }

  expand(event: MouseEvent) {
    event.stopPropagation();
    this.isExpanded = true;
  }

  close() {
    this.isExpanded = false;
  }
}
