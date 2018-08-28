import { Component } from '@angular/core';
import {ImageService} from "./image/shared/image.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listImages=[];

constructor(private imageService:ImageService,private router:Router){
}

  reciveNewList($event){
    this.router.navigate(['/gallery',$event]);
  }
}
