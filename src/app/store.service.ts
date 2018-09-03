import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
private  store = new  EventEmitter();

  constructor() { }

  notify(keyword :String){
   this.store.next(keyword);
  }

  listen(listnner:any){
    this.store.subscribe(listnner);
  }


}
