import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalAppService {
  get httpOptions() {
    return {
      headers: new HttpHeaders().append('Access-Control-Allow-Origin', '*').append('Content-Type', 'application/json')
    }
  }
  constructor(private http: HttpClient) { }

  getDoctors(): any {
    var url = 'https://localhost:7132/api/Doctors';
    
    return this.http.get(url, this.httpOptions).pipe(map((data: any) => data))
  }

  getPatients(): any {
    var url = 'https://localhost:7132/api/Patients';

    return this.http.get(url, this.httpOptions).pipe(map((data: any) => data))
  }

  getMedicines(): any {
    var url = 'https://localhost:7132/api/Medicine';

    return this.http.get(url, this.httpOptions).pipe(map((data: any) => data))
  }

  getRecords(): any {
    var url = 'https://localhost:7132/api/Record';

    return this.http.get(url, this.httpOptions).pipe(map((data: any) => data))
  }

  createDoctor(doctor: any): any{
    var url = 'https://localhost:7132/api/Doctors';

    const body = JSON.stringify(doctor);
    return this.http.post(url, body, this.httpOptions)   
  }

  updateDoctor(doctor: any): any{
    var url = 'https://localhost:7132/api/Doctors';

    const body = JSON.stringify(doctor);
    return this.http.put(url, body, this.httpOptions)
  }
}
