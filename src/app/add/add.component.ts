import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  name;
  prefix;
  description;
  notify;
  enableNotes;
  boj: any;
  constructor(
    private api: ApiService,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * Submit Data for Add new project
   */
  onSubmit() {
    this.boj = {
      name: this.name,
      prefix: this.prefix,
      description: this.description,
      notify: this.notify,
      enableNotes: this.enableNotes
    }
    /**
     * Save Data
     */
    this.httpClient.post(this.api.baseUrl, this.boj).subscribe((data => {
      console.log(data);
    }));
    this.router.navigate(['/']);
  }
}
