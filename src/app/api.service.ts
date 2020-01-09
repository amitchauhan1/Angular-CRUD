import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProject } from './Project';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3000/Project/';
  data: IProject[];
  constructor(private http: HttpClient, private router: Router) {
    console.log(this.baseUrl);
  }
  getData(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.baseUrl);
  }
  delete(id) {
    this.http.delete(this.baseUrl + id).subscribe();
  }
  edit(id: number): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.baseUrl + id);
  }

  update(id, add) {
    this.http.put(this.baseUrl + id, add).subscribe((data => {
      return this.router.navigate(['/']);
    }));
  }
}
