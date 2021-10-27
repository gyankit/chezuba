import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JsonData } from 'src/app/models/json-data';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() jsonData!: JsonData;
  @Input() category: string | undefined;
  @Output() hideItemEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }

  hideItem($event: number | undefined) {
    this.hideItemEvent.emit($event);
  }

}
