import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/server-config';

export class Data {
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  constructor(private http: HttpClient) { }

  getSubjectDetail(id: number) {
    return this.http.get(`${url}/subjects/${id}`);
  }

  getSingleChapter(id: number) {
    return this.http.get(`${url}/chapters/${id}`);
  }
}
