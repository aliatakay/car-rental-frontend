import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = 'https://localhost:44371/api/cars/getdetails';

  constructor(private httpClient: HttpClient) {}

  getCarDetails(): Observable<CarDetailResponseModel> {
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl);
  }
}
