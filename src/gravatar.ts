import {Directive, ElementRef, Input, OnChanges} from '@angular/core';
let md5 = require('md5');

@Directive({
  selector: '[gravatar]'
})
export class Gravatar implements OnChanges {
  @Input('email') email: string;
  @Input('size') size: number = 16;
  @Input('fallback') fallback: string = 'mm';

  constructor(private elementRef: ElementRef) {}

  requestGravatar() {
    console.log('Requesting Gravatar: ', this.email, md5(this.email));
    this.elementRef.nativeElement.src = `//www.gravatar.com/avatar/${md5(this.email)}?s=${this.size}&d=${this.fallback}`;
  }
   
  ngOnInit() {
    this.requestGravatar();
  }
   
  ngOnChanges(changes: SimpleChanges) {
    this.requestGravatar();
  }
}
