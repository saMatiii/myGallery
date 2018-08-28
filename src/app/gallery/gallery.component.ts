import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ImageService} from "../image/shared/image.service";
import {
  ActivatedRoute , Router, Params
} from "@angular/router";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges ,OnInit{
  photos:String ="Live pictures";
  @Input() imageList=[];
  id:number=0;
  keyword:any;
  @Input() filterby? : string ='all';

  constructor(private imageService:ImageService,private router:Router,private aRoute:ActivatedRoute) {
      this.aRoute.params.subscribe((params: Params) => {
        let keyword = params['keyword'];
        if(keyword!='all'){
          this.imageList = this.imageService.getImages().filter(element => {
            return element.category === keyword
          });
        }else if(keyword=='all'){
          this.imageList=this.imageService.getImages()
        }
      });

  }

  ngOnChanges(){};

  ngOnInit(){
    this.imageList=this.imageService.getImages();
  };

  onFilter(keyword:string){
    this.filterby=keyword;
    this.router.navigate(['/gallery',keyword]);
    if(keyword=='all'){this.imageList= this.imageService.getImages();
    }else{ let list= this.imageService.getImages().filter(element =>{ return element.category === keyword});
    this.imageList=list;
    }
  }



}
