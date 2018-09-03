import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StoreService} from "../store.service";

@Component({
  selector: 'app-side-bare',
  templateUrl: './side-bare.component.html',
  styleUrls: ['./side-bare.component.css']
})
export class SideBareComponent implements OnInit {
@Output() barKeyword = new EventEmitter();

  constructor(private storeService:StoreService) { }

  ngOnInit() {
  }

  filtering(keword){
    this.barKeyword.emit(keword);
    this.storeService.notify(keword);
  }

}
