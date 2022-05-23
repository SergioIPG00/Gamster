import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasoDatosService {

  private objectSource = new BehaviorSubject<{}>({});
  private objectJuego = new BehaviorSubject<{}>({});

  $getobjectSource = this.objectSource.asObservable();
  $getobjectJuego= this.objectJuego.asObservable();

  constructor() { }

  sendObjectSource(data: any){
    this.objectSource.next(data);
  }

  sendObjectJuego(data1: any){
    this.objectJuego.next(data1);
  }
}
