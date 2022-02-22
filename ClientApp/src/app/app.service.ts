import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable ,  throwError  } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AppService {
  public value="";
  
    baseUrlString = '';
    constructor(private https: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrlString = baseUrl;
    }
    /*public userLogin(userLoginData): Observable<any> {
      return this.https.post(`${this.baseUrlString}api/UserLogin/CheckUser`, userLoginData).pipe(
        map(
          (res: Response) => { return res }
        ), catchError((error: Response) => throwError(error))
      );
    }*/

    /**
     * setData
     */
    public setData(data:any) {
      this.value=data;
      console.log(this.value)
    }
    public getData(){
      return this.value;
    }
}