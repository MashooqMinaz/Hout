import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  homeshow:boolean = false;
  cartshow:boolean = false;

  home:boolean = false;
  shop:boolean = false;
  pages:boolean = false;
  aboutus:boolean = false;

  homearrow = "chevron_right"
  shoparrow = "chevron_right"
  pagesarrow = "chevron_right"
  aboutusarrow = "chevron_right"


  homeshowfn(){
  this.homeshow = !this.homeshow
  }

  homefn(){
    this.home = !this.home
    this.pages = false
    this.shop = false
    this.aboutus = false

  if(this.home){
    this.homearrow = "expand_more"
  }if(!this.home){
    this.homearrow = "chevron_right"
  }

  if(this.shop){
    this.shoparrow = "expand_more"
  }if(!this.shop){
    this.shoparrow = "chevron_right"
  }

  if(this.pages){
    this.pagesarrow = "expand_more"
  }if(!this.pages){
    this.pagesarrow = "chevron_right"
  }

  if(this.aboutus){
    this.aboutusarrow = "expand_more"
  }if(!this.aboutus){
    this.aboutusarrow = "chevron_right"
  }

  }

  shopfn(){
    this.shop = !this.shop
    this.pages = false
    this.aboutus = false
    this.home = false

    if(this.home){
      this.homearrow = "expand_more"
    }if(!this.home){
      this.homearrow = "chevron_right"
    }

    if(this.shop){
      this.shoparrow = "expand_more"
    }if(!this.shop){
      this.shoparrow = "chevron_right"
    }

    if(this.pages){
      this.pagesarrow = "expand_more"
    }if(!this.pages){
      this.pagesarrow = "chevron_right"
    }

    if(this.aboutus){
      this.aboutusarrow = "expand_more"
    }if(!this.aboutus){
      this.aboutusarrow = "chevron_right"
    }

  }

  pagefn(){
    this.pages = !this.pages
    this.shop = false
    this.aboutus = false
    this.home = false

  if(this.home){
    this.homearrow = "expand_more"
  }if(!this.home){
    this.homearrow = "chevron_right"
  }

  if(this.shop){
    this.shoparrow = "expand_more"
  }if(!this.shop){
    this.shoparrow = "chevron_right"
  }

  if(this.pages){
    this.pagesarrow = "expand_more"
  }if(!this.pages){
    this.pagesarrow = "chevron_right"
  }

  if(this.aboutus){
    this.aboutusarrow = "expand_more"
  }if(!this.aboutus){
    this.aboutusarrow = "chevron_right"
  }

  }

  cart(){
    this.cartshow = !this.cartshow
  }
  cartbk(){
    this.cartshow = false
  }

}
