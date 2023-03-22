import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = '';
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    console.log('* Esta imagen reventó', this.elHost);
    elNative.src = '../../../assets/images/imgBroken.jpeg'
  }

  constructor(private elHost: ElementRef) {
    
  }

}
