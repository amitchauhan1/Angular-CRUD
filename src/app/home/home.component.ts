import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IProject } from '.././Project';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  updateData = 'false';
  allData: IProject[];
  constructor(
    private api: ApiService,
    private httpClient: HttpClient,
    private router: Router

  ) {
    console.log(this.allData);
  }

  ngOnInit() {
    // this.httpClient.get(this.api.baseUrl).subscribe((data => {
    //   console.log(data);
    //   this.allData = data;
    // }));
    this.api.getData().subscribe((data => {
        console.log(data);
        this.allData = data;
      }));
  }

  add() {
    this.router.navigateByUrl('add');
  }

  deleteData(id: number) {
    this.api.delete(id);
  }

  updateDetail(id: number) {
    this.router.navigate(['edit/:', id]);
    // this.updateData = 'true';
    // this.api.edit(data);
  }
 
}

