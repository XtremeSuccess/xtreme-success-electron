import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/server-config';

export class Data {
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) { }

  getAllCourses() {
    return this.http.get(`${url}/courses`);
  }

  getSingleCourse(id: number) {
    return this.http.get(`${url}/courses/${id}`);
  }
}
