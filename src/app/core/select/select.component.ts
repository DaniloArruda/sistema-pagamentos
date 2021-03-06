import {
  Component,
  forwardRef,
  Input,
  ViewChild,
  TemplateRef,
  ElementRef,
  ViewContainerRef,
  OnInit,
  Renderer2
} from "@angular/core";
import { NG_VALUE_ACCESSOR, NgModel } from "@angular/forms";
import { DropdownConfig, DropdownMenuService } from "../dropdown-menu.service";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"]
})
export class SelectComponent implements OnInit {
  @ViewChild(NgModel) model: NgModel;

  @ViewChild("container", { read: ViewContainerRef })
  container: ViewContainerRef;
  @ViewChild("dropdown") dropdown: ElementRef<HTMLDivElement>;

  @Input() block: string;
  @Input() options: Array<SelectionOption>;

  value: SelectionOption;

  private opened = false;

  constructor(
    private dropdownMenuService: DropdownMenuService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {}

  get arrow() {
    return this.opened ? "\u25B2" : "\u25BC";
  }

  selectOption(option: SelectionOption) {
    this.value = option;
    this.close();
  }

  open(template: TemplateRef<any>) {
    this.opened = true;

    const dropdownElement = this.dropdownMenuService.open(
      this.dropdown,
      template,
      this.container,
      this.getDropdownConfig()
    );

    this.renderer.setStyle(
      dropdownElement,
      "width",
      `${this.dropdown.nativeElement.clientWidth}px`
    );
  }

  close() {
    this.opened = false;
    this.dropdownMenuService.close();
  }

  private getDropdownConfig() {
    return new DropdownConfig({
      position: {
        originX: "start",
        originY: "bottom",
        overlayX: "start",
        overlayY: "top"
      },
      backdropAction: () => (this.opened = false)
    });
  }
}

export interface SelectionOption {
  key: string;
  caption: string;
}
