import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AppStatusService} from '../../../services/app-status.service'
import {ComboSelectSliderComponent} from '../../elements/pricing-elements/combo-select-slider/combo-select-slider.component'
declare var $: any;

@Component({
  selector: 'app-range-slider',
  templateUrl: 'range-slider.component.html',
  styleUrls: ['./range-slider.component.scss'],
})

export class RangeSliderComponent{
  
  @Input()
  items: Array<any> = [];
  @Input()
  default:number;
  @Output()
  default_value:EventEmitter<number> = new EventEmitter<number>();
  

  
  onValueChange(model:number){
    var some = this.default_value;
     console.log(some);
   }

  constructor(private appStatus: AppStatusService) {
    this.appStatus = appStatus;
  }

  ngOnInit(){
    
    if (this.appStatus.is_platform_browser) {
      $("#slider").slider({
        animate: true,
        range: "min",
        value: this.default,
        min: 1,
        max: this.items.length,
        step: 1,
        // slide:(event, value)=>{
        //       //$( "#number").val( value.value)
        //       // console.log(value.value);
        //       //this.default_value = value.value;
        //       //console.log(this.default_value.emit(value));
        // },
        
      });
      // $( "#number").on( "input", function() {
      //   $("#slider").slider("value", this.value);
      // });
      
    }
  }
}
