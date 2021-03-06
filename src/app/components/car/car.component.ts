import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDetail[] = [];
  dataLoaded: boolean = false;

  constructor(private carDetailService: CarDetailService) {}

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails() {
    this.carDetailService.getCarDetails().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
}
