import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appTemplate]"
})
export class TemplateDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
