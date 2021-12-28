import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ImageTask';

  
  
  image1 ="../assets/images/ethan-robertson-SYx3UCHZJlo-unsplash.jpg";
  image2 = "../assets/images/minimalist-desktop-5.jpg";
  image3 = "../assets/images/minimalist-desktop-10.jpg";
  image4 = "../assets/images/joshua-sortino-xZqr8WtYEJ0-unsplash.jpg"
  image5 = "../assets/images/4k-desktop-wallpaper.-2560×1440.jpg";
  image6 = "../assets/images/1335039.webp";

imageCollection =[ {image : this.image1 , imageFlag : false},
                   {image : this.image2 , imageFlag : false},
                   {image : this.image3 , imageFlag : false},
                   {image : this.image4 , imageFlag : false},
                   {image : this.image5 , imageFlag : false},
                   {image : this.image6 , imageFlag : false}]
  firstRowImageArray=[this.imageCollection]
           
  
  addImage(value:any,index:number){

  // this.imageCollection.forEach((element,i) => {
  //   if(value == element.image){
  //     if(index)

  //   }
  // });
  if(index == this.imageCollection.length-1 || index == this.imageCollection.length-2 || index == this.imageCollection.length-3 ||
    index == this.imageCollection.length-4){
      this.imageCollection.push({image : value , imageFlag : true,})
    }else
  if(index != this.imageCollection.length-1 ){

    for(let i = 3 ; i <= this.imageCollection.length; i+=3){
      // console.log(i);
    
    if(index < i){
      let arrayIndex = i - index;
      index += arrayIndex;
      console.log(index);
      this.imageCollection.splice(index,0,{image : value , imageFlag : true,})
      break;
    }
    else 
    if( i+3 > this.imageCollection.length) {
        // console.log(this.imageCollection.length);
        this.imageCollection.splice(this.imageCollection.length,0,{image : value , imageFlag : true,})
        break;
    }
  }
    }else{
      this.imageCollection.push({image : value , imageFlag : true,})
    }
console.log(this.imageCollection);


  }

}





