import { Component, OnInit } from '@angular/core';
import fightData from '../flightData.json';
interface flightdata{
  Departure:String;
  Duration:String;
  Arrival:String;
  Price : Number;
  ImgName: String;
  countryName: String;
  DEL:String;
  Refund : String;
  BOM: String;
  book : String;
}
@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flights : flightdata[] =fightData;
}
