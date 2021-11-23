import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[componentHost]',
})
export class componentHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
