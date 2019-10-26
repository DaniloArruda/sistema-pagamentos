import { Injectable, ComponentRef } from "@angular/core";
import {
  Overlay,
  OverlayConfig,
  ConnectionPositionPair,
  OverlayRef
} from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import {
  DropdownMenuComponent,
  DropdownMenuItem
} from "./dropdown-menu/dropdown-menu.component";

@Injectable({
  providedIn: "root"
})
export class DropdownMenuService {
  overlayRef: OverlayRef;
  componentRef: ComponentRef<DropdownMenuComponent>;
  positions: ConnectionPositionPair[] = [
    {
      originX: "end",
      originY: "top",
      overlayX: "end",
      overlayY: "top"
    }
  ];

  constructor(private overlay: Overlay) {}

  open(target: HTMLElement, items: DropdownMenuItem[]) {
    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: "transparent",
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(target)
        .withPositions(this.positions)
        .withPush(false)
    });

    this.overlayRef = this.overlay.create(overlayConfig);
    this.overlayRef.backdropClick().subscribe(() => this.close());

    const portal = new ComponentPortal(DropdownMenuComponent);

    this.componentRef = this.overlayRef.attach(portal);
    this.componentRef.instance.items = items;
  }

  close() {
    this.overlayRef.dispose();
    this.componentRef.destroy();
  }
}
