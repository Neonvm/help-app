import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapse-box',
  templateUrl: './collapse-box.component.html',
  styleUrls: ['./collapse-box.component.scss'],
})
export class CollapseBoxComponent {
  @Input() 
  is_show:boolean = false;
  
  clicker() {
     this.is_show = !this.is_show;
  }

}
