import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Post, Product } from 'src/models/PostModel';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private apiURL = 'https://localhost:7191/';

  constructor(private httpClient: HttpClient) {}

  addInvoice(allPost: Post[]): Observable<any> {
    //alert("Service");
    return this.httpClient
      .post<Post[]>(this.apiURL + 'api/invoice/postInvoice/', allPost)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
      console.log(errorMessage);
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log(errorMessage);
    }
    return throwError(errorMessage);
  }

  getInvoice(): Observable<any> {
    //alert("Service");
    return this.httpClient
      .get<Post[]>(this.apiURL + 'api/invoice/getAllInvoice/')
      .pipe(catchError(this.errorHandler));
  }
  getAllProduct(): Observable<any> {
    //alert("Service");
    return this.httpClient
      .get<Product[]>(this.apiURL + 'api/invoice/getAllProduct/')
      .pipe(catchError(this.errorHandler));
  }

}
