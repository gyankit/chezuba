import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JsonData } from '../models/json-data';
import { JsonDataService } from '../services/json-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loader: boolean = true;
  jsonData: JsonData[] = [];
  datas: JsonData[] = [];
  categories = ['All', 'Magic', 'Thirds', 'Fifths'];
  category: string = this.categories[0];

  constructor(private jsonService: JsonDataService) { }

  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe(
      datas => {
        datas.forEach((item) => {
          item.active = true;
          if (item.id % 3 == 0 && item.id % 5 == 0) {
            item.category = 'Magic'
          } else if (item.id % 3 == 0) {
            item.category = 'Thirds'
          } else if (item.id % 5 == 0) {
            item.category = 'Fifths'
          } else {
            item.category = null
          }
          this.jsonData.push(item);
        })
      }
    );
    this.delay();
    this.datas = this.jsonData;
  }

  tabButtonClick($event: number) {
    this.loader = true;
    this.datas = [];
    if ($event == 0) {
      this.datas = this.jsonData;
    } else {
      this.delay();
      this.jsonData.forEach(item => {
        if (item.category == this.categories[$event]) {
          this.datas.push(item);
        }
      });
    }
  }

  hideItem($event: any) {
    this.jsonData.forEach(item => {
      if (item.id == $event) {
        item.active = false;
      }
    })
  }

  delay() {
    setTimeout(() => {
      this.loader = false;
    }, 1000);
  }

}


