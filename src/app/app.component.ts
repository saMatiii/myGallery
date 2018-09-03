import {Component, ViewChild} from '@angular/core';
import {ImageService} from "./image/shared/image.service";
import {Route, Router} from "@angular/router";
import {SideBareComponent} from "./side-bare/side-bare.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listImages=[];
  @ViewChild(SideBareComponent) testKeyword

constructor(private imageService:ImageService,private router:Router){
}

  reciveNewList($event){
    this.router.navigate(['/gallery',$event]);
  }

  filtring($event){
    console.log("in parent component : "+$event);
  }
}
