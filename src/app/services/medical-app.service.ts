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

  createPatient(patient: any): any{
    var url = 'https://localhost:7132/api/Patients';

    const body = JSON.stringify(patient);
    return this.http.post(url, body, this.httpOptions)  
  }

  createRecord(record: any): any{
    var url = 'https://localhost:7132/api/Record';

    const body = JSON.stringify(record);
    return this.http.post(url, body, this.httpOptions)  
  }

  updateDoctor(doctor: any): any{
    var url = 'https://localhost:7132/api/Doctors';

    const body = JSON.stringify(doctor);
    return this.http.put(url, body, this.httpOptions)
  }

  updatePatient(patient:any): any{
    var url = 'https://localhost:7132/api/Patients';

    const body = JSON.stringify(patient);
    return this.http.put(url, body, this.httpOptions)
  }

  updateRecord(record:any):any{
    var url = 'https://localhost:7132/api/Record';

    const body = JSON.stringify(record);
    return this.http.put(url, body, this.httpOptions)
  }

  deleteDoctor(id: any):any{
    var url = `https://localhost:7132/api/Doctors/${id}`;

    return this.http.delete(url, this.httpOptions)
  }

  deletePatient(id: any):any{
    var url = `https://localhost:7132/api/Doctors/${id}`;

    return this.http.delete(url, this.httpOptions)
  }

  deleteRecord(id:any): any{
    var url = `https://localhost:7132/api/Record/${id}`;

    return this.http.delete(url, this.httpOptions)
  }
}
