import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.backgroundColor="red";
    el.nativeElement.style.display="inline-block";
    
   }

}
