import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DemoComponent implements OnInit, OnChanges {

  @Input('name') name: string;
  value: string;

  constructor() { }

  ngOnInit() {
    // alert(this.name);
  }

  buttonClicked() {
    alert("Button is click from another app");
  }


  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes['name']);
    // if (changes['name']) {
    //   alert(this.name);
    // }
    // if (this.name) {
    //   this.value = this.name;
    // }
  }

}
