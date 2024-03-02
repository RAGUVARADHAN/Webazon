import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent 
{
    employee:any[]=[
      {
        img:'assets/images/about_img/img2.jpg',
        name:'Tom Cruise',
        designation:'Founder & chairman'
      },
      {
        img:'assets/images/about_img/img3.jpg',
        name:'Emma Watson',
        designation:'Managing Director'
      },
      {
        img:'assets/images/about_img/img4.jpg',
        name:'Will Smith',
        designation:'Product Designer'
      }
    ];
    ngOnInit()
    {
      console.log(this.employee);
    }
    moveLeft()
    {
        //this.employee=this.employee.append[this.employee[0]];
    }
    moveRight()
    {

    }
}
