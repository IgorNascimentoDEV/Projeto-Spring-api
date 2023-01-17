import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  createSala() {
    throw new Error('Method not implemented.');
  }
  deleteSala(id: number):any {
    throw new Error('Method not implemented.');
  }



  getSalasList(): import("rxjs").Observable<import("./Sala").Sala[]> {
    throw new Error('Method not implemented.');
  }



  constructor() { }
}
