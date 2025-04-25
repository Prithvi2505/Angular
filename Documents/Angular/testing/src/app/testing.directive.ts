import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTesting]',
  standalone: false
})
export class TestingDirective {

  constructor(private element: ElementRef, private render: Renderer2) { }

  @HostBinding('style.backgroundColor') background: string = "cyan"

  @HostListener('mouseenter') mouseenter() {
    this.background = "#548f89";
  }
  @HostListener('mouseleave') mouseleave() {
    this.background = "cyan";
  }

}
