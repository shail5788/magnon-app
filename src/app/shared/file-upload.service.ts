import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpEvent,
  HttpErrorResponse,
  HttpEventType,
  HttpHeaders
} from "@angular/common/http";
import {FileData} from '../file-transfer/file-data';
import { throwError } from "rxjs";
import {Observable} from 'rxjs';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FileUploadService {
  // apiUrl="http://ec2-13-234-37-40.ap-south-1.compute.amazonaws.com:1200/api/v1/file-upload";
  //apiUrl = "https://magnon-api.herokuapp.com/api/v1/file-upload";
  url = "http://staging1.delivery-projects.com/edm-transfer-api/api/v1";
  constructor(private http: HttpClient) {}

  upload(formData) {

    // let headers = new HttpHeaders ();
    // headers.append('Content-Type', 'multipart/form-data;boundary='+Math.random());
    // headers.append('Accept', 'application/json');
 
    return this.http
      .post<any>(`${this.url}/edm/edm-transfer`, formData, {
        reportProgress: true,
        observe: "events"
      
      })
      .pipe(
        map(event => this.getEventMessage(event, formData)),
        catchError(this.handleError)
      );
  }

  private getEventMessage(event: HttpEvent<any>, formData) {
    switch (event.type) {
      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);
        break;
      case HttpEventType.Response:
        return this.apiResponse(event);
        break;
      default:
        return `File "${formData.get("file").name}" surprising upload event: ${
          event.type
        }.`;
    }
  }

  private fileUploadProgress(event) {
    const percentDone = Math.round((100 * event.loaded) / event.total);
    return { status: "progress", message: percentDone };
  }

  private apiResponse(event) {
    console.log(event.body)
    return event.body;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      // console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // console.error(
      //   `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      // );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened. Please try again later.");
  }
 getAllfiles():Observable<FileData[]>{

    return this.http.get<FileData[]>(`${this.url}/edm/edm-transfer/get-all-files`);
 }

}
