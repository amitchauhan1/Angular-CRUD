import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { IProject } from '../Project';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  allData: IProject;
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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  /**
   * Get Single Data from Project Data
   */
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.api.editData(this.id).subscribe((data => {
      this.allData = data;
    }));
  }

  /**
   * Submit all Updated data
   */
  onSubmit() {
    this.obj = {
      id: this.allData.id,
      name: this.allData.name,
      prefix: this.allData.prefix,
      description: this.allData.description,
      notify: this.allData.notify,
      enableNotes: this.allData.enableNotes
    };
    /**
     * Call Update Method from ApiService
     */
    this.api.updateData(this.id, this.obj);
  }
}
