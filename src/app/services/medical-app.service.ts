import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalAppService {

  constructor(private http: HttpClient) { }

  getDoctors(): any {
    var url = 'https://localhost:7132/api/Doctors';
    const httpOptions = {
      headers: new HttpHeaders().append( 'Access-Control-Allow-Origin','*').append('Content-Type', 'application/json')
    };

    return this.http.get(url, httpOptions).pipe(map( (data: any) => data) )
  }
}
