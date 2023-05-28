import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  aboutUs:aboutUsArr[] = [
    {
      imageURL:"../../../assets/images/furnithree.jpg",
      productCategory:"Tables, Wall Plates",
      date:"March 27, 2020",
      productHeader:"thinking of a place",
      productDescription:"Lorem ipsum dolor sit amet, debet consulatu ne vix, vel utiusto postea, hinc choro per id. Vide"
    },
    {
      imageURL:"../../../assets/images/furniTwo.jpg",
      productCategory:"Tables, Wall Plates",
      date:"March 27, 2020",
      productHeader:"thinking of a place",
      productDescription:"Lorem ipsum dolor sit amet, debet consulatu ne vix, vel utiusto postea, hinc choro per id. Vide"
    },
    {
      imageURL:"../../../assets/images/furniOne.jpg",
      productCategory:"Tables, Wall Plates",
      date:"March 27, 2020",
      productHeader:"thinking of a place",
      productDescription:"Lorem ipsum dolor sit amet, debet consulatu ne vix, vel utiusto postea, hinc choro per id. Vide"
    },

  ]

}

interface aboutUsArr{
  imageURL:string
  productCategory:string
  date:string
  productHeader:string
  productDescription:string
}
