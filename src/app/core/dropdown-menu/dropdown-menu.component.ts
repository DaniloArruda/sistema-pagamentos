import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-dropdown-menu",
  templateUrl: "./dropdown-menu.component.html",
  styleUrls: ["./dropdown-menu.component.css"]
})
export class DropdownMenuComponent implements OnInit {
  @Input() items: DropdownMenuItem[];

  constructor() {}

  ngOnInit() {}
}

export class DropdownMenuItem {
  constructor(
    public caption: string,
    public icon: string,
    public action: () => any,
    public block?: string
  ) {}
}
