import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pricing-box',
  templateUrl: './pricing-box.component.html',
  styleUrls: ['./pricing-box.component.scss'],
})
export class PricingBoxComponent{
  private current_index:number;

  @Input() data: any;
  @Input() items: any;
  
  ngOnInit() {
    let len = this.items.length;
    if (len > 0) {
      this.current_index = this.items[len - 1].id;
    }
  }
  
  check(item){
    this.current_index = item.id;
    console.log(item.id);
  }
}