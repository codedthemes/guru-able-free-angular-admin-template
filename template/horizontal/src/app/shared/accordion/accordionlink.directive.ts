import {
  Directive, HostBinding, Inject, Input, OnInit, OnDestroy, ElementRef
} from '@angular/core';

import { AccordionDirective } from './accordion.directive';

@Directive({
  selector: '[appAccordionLink]'
})
export class AccordionLinkDirective implements OnInit, OnDestroy {

  @Input() public group: any;

  @HostBinding('class.pcoded-trigger')
  @Input()
  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    this._open = value;
    /*for slimscroll on and off*/
    document.querySelector('.pcoded-inner-navbar').classList.toggle('scroll-sidebar');
    if (value) {
        this.nav.closeOtherLinks(this);
    }
  }

  protected _open: boolean;
  protected nav: AccordionDirective;

  constructor(@Inject(AccordionDirective) nav: AccordionDirective, public elements: ElementRef) {
    this.nav = nav;
  }

  ngOnInit(): any {
    this.nav.addLink(this);
  }

  ngOnDestroy(): any {
    this.nav.removeGroup(this);
  }

  toggle(): any {
    /*for slimscroll on and off*/
    document.querySelector('.pcoded-inner-navbar').classList.add('scroll-sidebar');

    this.open = !this.open;

    if (this.open && this.elements.nativeElement.querySelector('.pcoded-submenu')) {
      const nodeEle = this.elements.nativeElement.getBoundingClientRect();
      const eleWidth = this.elements.nativeElement.querySelector('.pcoded-submenu').clientWidth;
      const offset = nodeEle.left + window.pageXOffset - document.documentElement.clientLeft;
      const windowWidth = window.innerWidth;
      if ((2 * eleWidth + offset) > windowWidth) {
        (this.elements.nativeElement.querySelector('.pcoded-submenu').parentNode).classList.add('edge');
      }
    }
  }
}
