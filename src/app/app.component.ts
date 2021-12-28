import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ImageTask';

  
  firstRowFirstImage =false;
  firstRowSecondImage =false;
  firstRowThirdImage =false;
  secondRowFirstImage =false;
  secondRowsecondImage =false;
  secondRowThirdImage =false;
  // public dish1 ="src\assets\images\download (1).jpg"
  addImage(value:any){
    console.log(value);
    if(value == 1){
      this.firstRowFirstImage =!this.firstRowFirstImage;
      this.firstRowSecondImage = false;
      this.firstRowThirdImage = false;
    }else if( value == 2){
      this.firstRowFirstImage = false;
      this.firstRowSecondImage =!this.firstRowSecondImage;
      this.firstRowThirdImage = false;
    }else if( value == 3){
      this.firstRowFirstImage = false;
      this.firstRowSecondImage = false;
      this.firstRowThirdImage =!this.firstRowThirdImage;
    }else if( value == 4){
      this.secondRowFirstImage =!this.secondRowFirstImage;
      this.secondRowsecondImage =false;
      this.secondRowThirdImage =false;
    }else if( value == 5){
      this.secondRowFirstImage =false;
      this.secondRowsecondImage =!this.secondRowsecondImage;
      this.secondRowThirdImage =false;
    }
    else if( value == 6){
      this.secondRowFirstImage =false;
      this.secondRowsecondImage =false;
      this.secondRowThirdImage =!this.secondRowThirdImage;
    }

  }
}

