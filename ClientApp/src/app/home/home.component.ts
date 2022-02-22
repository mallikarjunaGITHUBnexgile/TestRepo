import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { slideOutUpAnimation } from 'angular-animations';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ]
})
export class HomeComponent {
  constructor(private service:AppService) { }
  newName="Child";
  ngOnInit(){
    this.service.setData("Page");
    //console.log(this.service.getData+" from HOME")
  }
  onClick(value: string) {
    if (value == "signIn") {

    } else {

    }
  }
}
