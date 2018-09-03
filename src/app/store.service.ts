import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
private EventEmitter<String> store = new EventEmitter<>();

  constructor() { }

  notify(keyword :String){
   this.store.next(keyword);
  }


}
