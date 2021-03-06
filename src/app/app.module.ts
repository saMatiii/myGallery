import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [ImageService,FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
