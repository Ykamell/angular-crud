import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://prueba-a91bd-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {

  }

  public getData(): any {
    return this.http.get<any>(this.urlApi + 'employees.json')
  }

  public getEmployee(id: string): any {
    return this.http.get<any>(this.urlApi + id)
  }

  public getAreasData(): any {
    return this.http.get<any>(this.urlApi + 'areas.json')
  }

  public postAreaData(body: any): any {
    return this.http.post<any>(this.urlApi + 'areas.json', body)
  }

  public postData(body: any): any {
    return this.http.post<any>(this.urlApi + 'employees.json', body)
  }

  public deleteData(id: string): any {
    return this.http.delete<any>(this.urlApi + 'employees/' + id + '.json');
  }

  public deleteAreaData(id: string): any {
    return this.http.delete<any>(this.urlApi + 'areas/' + id + '.json');
  }
}
