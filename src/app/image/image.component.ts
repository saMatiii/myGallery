import { Component, OnInit } from '@angular/core';
import {ImageService} from "./shared/image.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
image:any;
imageList=[];


  constructor(private imageService: ImageService,private route:ActivatedRoute,private router:Router ) {
    this.imageList=imageService.getImages();
    this.route.params.subscribe((params:Params)=>{
      let id=params['id'];
      this.image=this.imageService.getImage(id);
    })
  }

  ngOnInit() {//the plus signe is to converte the value of the id to numaber
   this.image=this.imageService.getImage(+this.route.snapshot.params['id']);
  }

  Onkeyup(id:number){
    console.log(id);
    this.router.navigate(['/gallery',id]);
    this.image=this.imageService.getImage(id+1);

  }

}
