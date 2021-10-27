import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() category: string = 'All';
  @Input() idx: number = 0;

  @Output() categoryEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  tabButton($event: any) {
    this.categoryEvent.emit($event);
  }

}
