import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IProject } from '../Project';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  allData: IProject[];
  obj: IProject;
  id: number = null;
  name: string = null;
  prefix: string = null;
  description: string = null;
  notify: boolean = null;
  enableNotes: boolean = null;
  constructor(
    private api: ApiService,
    private httpClient: HttpClient,
    private router: Router
  ) {

    this.api.edit(this.id).subscribe((data => {
      console.log(data);
      this.allData = data;
    }));
   }

  ngOnInit() {
  }
  onSubmit() {
    this.obj = {
      id: this.allData.id,
      name: this.allData.name,
      prefix: this.allData.prefix,
      description: this.allData.description,
      notify: this.allData.notify,
      enableNotes: this.allData.enableNotes
    };
    this.api.update(this.id, this.obj);
  }
}
