import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  serData: IProject;
  flag: boolean = false;
  constructor(
    private api: ApiService,
    private httpClient: HttpClient,
    private router: Router

  ) {
    console.log(this.id);
    api.editData(this.id).subscribe((data => {
      console.log(data);
      
      this.serData = data;
    }));
  }

  @Input() id: number;
  // @Output() sendEvt = new EventEmitter<IProject>();



  searchID() {
    // this.sendEvt.emit(this.id);
  }

  ngOnInit() {
    // this.httpClient.get(this.api.baseUrl).subscribe((data => {
    //   console.log(data);
    //   this.allData = data;
    // }));

    /**
     * Get All Data using Api Service
     */
    this.api.getData().subscribe((data => {
      console.log(data);
      this.allData = data;
    }));
  }

  /**
   * Add Project data
   */
  addProject() {
    this.router.navigateByUrl('add');
  }

  /**
   * Delete Project Data
   * @param id Project ID
   */
  deleteProject(id: number) {
    this.api.deleteData(id);
  }

  /**
   * Update Poject Data
   * @param id Project ID
   */
  updateProject(id: number) {
    this.router.navigate(['edit/', id]);
  }

  searchProject() {
    this.flag = true;
  }
}

