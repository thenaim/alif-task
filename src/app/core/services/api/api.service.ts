import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiOptionalHeadersModel } from './api.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public get(
    url: string,
    optionalHeaders: ApiOptionalHeadersModel = {}
  ): Observable<any> {
    return this.http
      .get(url, {
        headers: this.httpHeaderOptions(optionalHeaders),
      })
      .pipe(catchError(this.handleError('get')));
  }

  public post(
    url: string,
    body: any,
    optionalHeaders: ApiOptionalHeadersModel = {}
  ): Observable<any> {
    return this.http
      .post(url, body, {
        headers: this.httpHeaderOptions(optionalHeaders),
      })
      .pipe(catchError(this.handleError('post')));
  }

  public put(
    url: string,
    body: any,
    optionalHeaders: ApiOptionalHeadersModel = {}
  ): Observable<any> {
    return this.http
      .put(url, body, {
        headers: this.httpHeaderOptions(optionalHeaders),
      })
      .pipe(catchError(this.handleError('put')));
  }

  private httpHeaderOptions(
    optionalHeaders: ApiOptionalHeadersModel
  ): HttpHeaders {
    return new HttpHeaders({
      // ...optionalHeaders,
    });
  }

  private handleError(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<any> => {
      console.log('status: ', error.status, ' operation: ', operation);

      // Let the app keep running by returning a safe result.
      return throwError(() => error);
    };
  }
}
