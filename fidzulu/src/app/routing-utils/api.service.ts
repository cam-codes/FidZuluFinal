import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(path: string): Observable<any> {
    return this.http.get<Response>(path)
    .pipe(
      catchError(this.handleError)
    );
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put<Response>(path, JSON.stringify(body))
    .pipe(
      catchError(this.handleError)
    );
  }

  post(path: string,  body: Object = {}): Observable<any> {
    return this.http.post<Response>(path, JSON.stringify(body))
    .pipe(
      catchError(this.handleError)
    );
  }

  delete(path: string): Observable<any> {
    return this.http.delete<Response>(path)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    return throwError(error.error);
  }

}
