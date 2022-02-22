import { ResidentCar } from './../residents/residentCar';
export class ParkingSpot{
  id!:string;
  parkingSpotNumber!:string;
  block!:string;
  status!:string
  residentCar!: ResidentCar;
}
