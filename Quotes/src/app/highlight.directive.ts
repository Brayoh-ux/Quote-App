import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {

  }

  @HostListener("click")onClick(){
    this.textDeco("green")
  }

  @HostListener("dblclick")onClicks(){
    this.textDeco("blue")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor = action;
  }

}
