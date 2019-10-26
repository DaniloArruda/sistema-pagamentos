import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ViewContainerRef,
  ViewChild
} from "@angular/core";
import {
  DropdownMenuService,
  DropdownConfig,
  DropdownMenuItem
} from "../dropdown-menu.service";

@Component({
  selector: "app-more-actions",
  templateUrl: "./more-actions.component.html",
  styleUrls: ["./more-actions.component.css"]
})
export class MoreActionsComponent implements OnInit {
  @ViewChild("container", { read: ViewContainerRef })
  container: ViewContainerRef;
  @Input() actions: DropdownMenuItem[];

  constructor(private dropdownMenuService: DropdownMenuService) {}

  ngOnInit() {}

  openMoreActions(target: HTMLElement, templateActions: TemplateRef<any>) {
    const dropdownConfig: DropdownConfig = {
      position: {
        originX: "end",
        originY: "top",
        overlayX: "end",
        overlayY: "top"
      }
    };
    this.dropdownMenuService.open(
      target,
      templateActions,
      this.container,
      dropdownConfig
    );
  }
}
