import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {AlertModule} from 'ngx-bootstrap/alert';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import {ImageService} from "./image/shared/image.service";
import { FilterPipe } from './image/shared/filter.pipe';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app-routing.module";
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxPaginationModule} from "ngx-pagination";
import { SideBareComponent } from './side-bare/side-bare.component';
import {NgModule} from "@angular/core";
import {MatMenuModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    FilterPipe,
    SideBareComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatMenuModule
  ],
  providers: [ImageService,FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
