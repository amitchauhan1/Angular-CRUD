import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IProject } from '../Project';
@Component({
  selector: 'app-serarch',
  templateUrl: './serarch.component.html',
  styleUrls: ['./serarch.component.scss']
})
export class SerarchComponent implements OnInit {
  id: number = null;
  allData1: IProject[];
  constructor(
    private api: ApiService
  ) {
  }

  ngOnInit() {
  }
  search($event: IProject) {

    console.log("data" + $event);
    this.api.searchData(this.id).subscribe((data => {
      console.log("data" + data);
      this.allData1 = data;
    }));
  }
}
