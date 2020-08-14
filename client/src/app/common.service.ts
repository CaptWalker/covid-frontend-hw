import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PatientRegistration } from './model/patientRegistration';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  // url = 'https://covid-backend-hw-dev-covid-hw.sandbox-ocp431-one-89dadfe96916fcd27b299431d0240c37-0000.eu-gb.containers.appdomain.cloud/getpatient';

  // header = new HttpHeaders()
  // .set('Access-Control-Allow-Origin', '*')
  // .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');

  // getPatient = (): Observable<any> => {
  //   return this.http.get<PatientRegistration>(this.url, {headers: this.header}).pipe(
  //     map((response: any) => {
  //       console.log(response);
  //       return response;
  //     }),
  //     catchError(this.handleError)
  //   );
  // }

  // private handleError(err: HttpErrorResponse) {
  //   let errMsg = '';
  //   if (err.error instanceof Error) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.log('An error occurred:', err.error.message);
  //     errMsg = err.error.message;
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.log(`Backend returned code ${err.status}`);
  //     errMsg = err.error.status;
  //   }
  //   return throwError(errMsg);
  // }
}
