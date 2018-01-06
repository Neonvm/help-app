import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
})
export class SelectBoxComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  @Input()
  items: Array<any> = [];
  @Input()
  text: string = '';
  @Input()
  price:string = '';
}
