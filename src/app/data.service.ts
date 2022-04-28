import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
// import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public id = new BehaviorSubject('2');
  abc = this.id.asObservable();

  public data = new BehaviorSubject('')
  xyz = this.data.asObservable();
  
  constructor(private http: HttpClient) { }

  setMassage() {
    return this.abc, this.xyz;
  }
  setfunction(id: any, data: any) {
    this.id.next(id);
    this.data.next(data);
  }



  getData() {
    return this.http.get("http://localhost:3000/api/getAllCourses ")
  }

  PostData(data: any) {
    return this.http.post('http://localhost:3000/api/insertCourses', data);
  }

  editData(id: any, data: any) {
    return this.http.put('http://localhost:3000/api/updateCourses/' + id, data);
  }

  deleteData(id: any) {
    return this.http.delete('http://localhost:3000/api/deleteCourses/' + id);
  }
}
