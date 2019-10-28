import {
  Injectable,
  TemplateRef,
  ViewContainerRef,
  EmbeddedViewRef,
  ElementRef
} from "@angular/core";
import {
  Overlay,
  OverlayConfig,
  OverlayRef,
  HorizontalConnectionPos,
  VerticalConnectionPos
} from "@angular/cdk/overlay";
import { TemplatePortal } from "@angular/cdk/portal";

@Injectable({
  providedIn: "root"
})
export class DropdownMenuService {
  private overlayRef: OverlayRef;
  private embeddedViewRef: EmbeddedViewRef<any>;
  private config: DropdownConfig = this.initialConfig();

  constructor(private overlay: Overlay) {}

  private initialConfig() {
    return new DropdownConfig({
      position: {
        originX: "start",
        originY: "top",
        overlayX: "start",
        overlayY: "top"
      }
    });
  }

  open(
    reference: HTMLElement | ElementRef,
    template: TemplateRef<any>,
    container: ViewContainerRef,
    config?: DropdownConfig
  ) {
    if (config) {
      this.config = config;
    }

    const referenceElement: HTMLElement = this.getReferenceElement(reference);

    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: "transparent",
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(referenceElement)
        .withPositions([this.config.position])
        .withPush(false)
    });

    this.overlayRef = this.overlay.create(overlayConfig);
    this.overlayRef.backdropClick().subscribe(() => this.close());

    const templatePortal = new TemplatePortal(template, container);

    this.embeddedViewRef = this.overlayRef.attach(templatePortal);
    const containerElement: HTMLElement = this.embeddedViewRef.rootNodes[0];

    return containerElement;
  }

  close() {
    this.overlayRef.dispose();
    this.embeddedViewRef.destroy();

    this.config.backdropAction ? this.config.backdropAction() : null;
    this.config = this.initialConfig();
  }

  private getReferenceElement(
    reference: HTMLElement | ElementRef
  ): HTMLElement {
    if (reference instanceof ElementRef) {
      return reference.nativeElement;
    }

    return reference;
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

export class DropdownConfig {
  /** Dropdown position relative to the target */
  position?: DropdownPosition;
  width?: string | number;
  backdropAction?: () => any;

  constructor(config?: DropdownConfig) {
    this.position = config.position ? config.position : null;
    this.width = config.width ? config.width : null;
    this.backdropAction = config.backdropAction ? config.backdropAction : null;
  }
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
