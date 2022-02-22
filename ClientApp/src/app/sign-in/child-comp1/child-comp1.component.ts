import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp1',
  templateUrl: './child-comp1.component.html',
  styleUrls: ['./child-comp1.component.css']
})
export class ChildComp1Component implements OnInit {

  @Output() childtoParent= new EventEmitter<string>();
  addNewItem(value: string) {
    this.childtoParent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
