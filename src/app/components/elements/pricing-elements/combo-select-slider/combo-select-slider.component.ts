import { Component, OnInit, Input, ElementRef} from '@angular/core';
//import {RangeSliderComponent} from '../../../elements/range-slider/range-slider.component'

@Component({
  selector: 'app-combo-select-slider',
  templateUrl: './combo-select-slider.component.html',
  styleUrls: ['./combo-select-slider.component.scss'],
  host: {
    '(document:click)': 'handleClick($event)',
}
})
export class ComboSelectSliderComponent{
  @Input() is_hide:boolean = true;

  public elementRef;
  public value = 4;
  
    constructor(myElement: ElementRef) {
        this.elementRef = myElement;
    }
  
    //toggle this component
    handleClick(event){
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if(inside){
            this.is_hide = false;
        }else{
          this.is_hide = true;
        }
    }
}