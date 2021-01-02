import { Directive, ElementRef} from '@angular/core';

@Directive({ selector: '[capitalizeLetter]' })
export class CapitalizeLetter {
    constructor(private el:ElementRef) {
        el.nativeElement.style.textTransform = 'capitalize';
     }
}