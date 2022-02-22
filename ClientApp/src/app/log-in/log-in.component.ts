import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Location} from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { animation } from '@angular/animations';
//import { AlertService } from '../_services/alert.service';
//import { AccountService } from '../_services/account.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AppService } from '../app.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
animations:[
  trigger('fadeSlideInOut', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
      animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
    ]),
  ]),
]
  
})
export class LogInComponent implements OnInit {
  userID: any;password: any;
  item="";
  @Input() name='';

  @Output() childtoParent= new EventEmitter<string>();
  addNewItem(value: string) {
    this.childtoParent.emit(value);
  }

  constructor(
    private _location: Location, private service:AppService
    ) { }
    logInForm = new FormGroup({
      userID : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    })

  ngOnInit(): void {
    this.item=this.service.getData();
    console.log(this.item);
    console.log(this.service.getData());
  }

  backClicked() {
    this._location.back();
  }
  onSubmit() {
    
    }

    
}
