import { Component, OnInit, Input } from '@angular/core';
import {Image} from '../../../../models/image';

@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
	images: Image[] =[
	new Image ('1','primera imagen', 'descripcion primera imagen','../assets/img/1.jpg','../assets/img/3.jpg'),
	new Image ('2','primera imagen', 'descripcion primera imagen','../assets/img/1.jpg','../assets/img/3.jpg'),
	new Image ('3','primera imagen', 'descripcion primera imagen','../assets/img/1.jpg','../assets/img/3.jpg'),
	new Image ('4','primera imagen', 'descripcion primera imagen','../assets/img/1.jpg','../assets/img/3.jpg'),
	new Image ('5','primera imagen', 'descripcion primera imagen','../assets/img/1.jpg','../assets/img/3.jpg'),
	new Image ('6','primera imagen', 'descripcion primera imagen','../assets/img/1.jpg','../assets/img/3.jpg'),
	]; 
  constructor() { }

  ngOnInit() {
  }

}
