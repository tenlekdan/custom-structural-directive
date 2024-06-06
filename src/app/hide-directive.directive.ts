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
  @Input('hideDir') delay: number;
  @Input('hideDirThen') placeHolder: TemplateRef<any> | null = null;
  constructor(
    private viewTemplateRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
  ngOnInit(): void {
    this.viewTemplateRef.createEmbeddedView(this.template);

    setTimeout(() => {
      this.viewTemplateRef.clear();
      if(this.placeHolder) {
        this.viewTemplateRef.createEmbeddedView(this.placeHolder)
      }
    }, this.delay);
  }
}
