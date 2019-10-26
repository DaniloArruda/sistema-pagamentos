import { Component, OnInit, Input } from "@angular/core";
import { DropdownMenuService } from "../dropdown-menu.service";
import { DropdownMenuItem } from "../dropdown-menu/dropdown-menu.component";

@Component({
  selector: "app-more-actions",
  templateUrl: "./more-actions.component.html",
  styleUrls: ["./more-actions.component.css"]
})
export class MoreActionsComponent implements OnInit {
  @Input() actions: DropdownMenuItem[];

  constructor(private dropdownMenuService: DropdownMenuService) {}

  ngOnInit() {}

  openMoreActions(target: HTMLElement) {
    this.dropdownMenuService.open(target, this.actions);
  }
}
