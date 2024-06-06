import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[hideDir]',
})
export class HideDirectiveDirective implements OnInit {
  @Input() delay: number = 2000;
  constructor(
    private viewTemplateRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
  ngOnInit(): void {
    this.viewTemplateRef.createEmbeddedView(this.template);
    setTimeout(() => {
      this.viewTemplateRef.clear();
    }, this.delay);
  }
}
