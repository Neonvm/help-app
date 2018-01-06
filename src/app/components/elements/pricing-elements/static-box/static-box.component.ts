import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-static-box',
  templateUrl: './static-box.component.html',
  styleUrls: ['./static-box.component.scss'],
})
export class StaticBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()
  text:string = '';
  @Input()
  title:string = '';
}
