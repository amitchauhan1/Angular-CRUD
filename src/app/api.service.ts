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

  /**
   * Get All Data
   */
  getData(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.baseUrl);
  }

  searchData(id): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${this.baseUrl}?id=${id}`);
  }
  /**
   * Delete Project Data
   * @param id Projec ID
   */
  deleteData(id) {
    this.http.delete(this.baseUrl + id).subscribe();
  }

  /**
   * Edit Project Data
   * @param id project ID
   */
  editData(id: number): Observable<IProject> {
    return this.http.get<IProject>(this.baseUrl + id);
  }

  /**
   * For Update Project Data
   * @param id Project Id
   * @param add Data for update Project
   */
  updateData(id: number, add: object) {
    this.http.put(this.baseUrl + id, add).subscribe((data => {
      return this.router.navigate(['/']);
    }));
  }
}
