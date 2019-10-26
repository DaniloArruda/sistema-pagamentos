import {
  Injectable,
  TemplateRef,
  ViewContainerRef,
  EmbeddedViewRef
} from "@angular/core";
import {
  Overlay,
  OverlayConfig,
  ConnectionPositionPair,
  OverlayRef,
  HorizontalConnectionPos,
  VerticalConnectionPos
} from "@angular/cdk/overlay";
import { TemplatePortal } from "@angular/cdk/portal";

@Injectable({
  providedIn: "root"
})
export class DropdownMenuService {
  overlayRef: OverlayRef;
  embeddedViewRef: EmbeddedViewRef<any>;
  positions: ConnectionPositionPair[] = [
    {
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "top"
    }
  ];

  constructor(private overlay: Overlay) {}

  open(
    target: HTMLElement,
    template: TemplateRef<any>,
    container: ViewContainerRef,
    config?: DropdownConfig
  ) {
    if (config) {
      config.position ? (this.positions = [config.position]) : null;
    }

    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: "transparent",
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(target)
        .withPositions(this.positions)
        .withPush(false)
    });

    this.overlayRef = this.overlay.create(overlayConfig);
    this.overlayRef.backdropClick().subscribe(() => this.close());

    const templatePortal = new TemplatePortal(template, container);

    this.embeddedViewRef = this.overlayRef.attach(templatePortal);
  }

  close() {
    this.overlayRef.dispose();
    this.embeddedViewRef.destroy();
  }
}

export class DropdownMenuItem {
  constructor(
    public caption: string,
    public icon: string,
    public action: () => any,
    public block?: string
  ) {}
}

export declare class DropdownConfig {
  /** Dropdown position relative to the target */
  position?: DropdownPosition;

  constructor(config?: DropdownConfig);
}

export interface DropdownPosition {
  /** X-axis attachment point for connected overlay origin. Can be 'start', 'end', or 'center'. */
  originX: HorizontalConnectionPos;
  /** Y-axis attachment point for connected overlay origin. Can be 'top', 'bottom', or 'center'. */
  originY: VerticalConnectionPos;
  /** X-axis attachment point for connected overlay. Can be 'start', 'end', or 'center'. */
  overlayX: HorizontalConnectionPos;
  /** Y-axis attachment point for connected overlay. Can be 'top', 'bottom', or 'center'. */
  overlayY: VerticalConnectionPos;
}
