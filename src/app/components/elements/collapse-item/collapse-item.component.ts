import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapse-item',
  templateUrl: './collapse-item.component.html',
  styleUrls: ['./collapse-item.component.scss'],
})
export class CollapseItemComponent{
  @Input() 
  is_show:boolean = false;
  
  clicker() {
     this.is_show = !this.is_show;
     }
}