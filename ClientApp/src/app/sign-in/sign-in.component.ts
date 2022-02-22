import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EmailValidator, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { AccountService } from '../_services/account.service';
//import { AlertService } from '../_services/alert.service';
import { first } from 'rxjs/operators';
import {FormControl, Validators} from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { AppService } from '../app.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
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
export class SignInComponent implements OnInit {
  public data: any;
  item:any;
  //@Input() item = '';
  
  firstName: any;lastName: any;gender: any;email: any;phoneNumber: any;password: any;confirmPassword: any;match
  //firstnamePattern ="";
  
  signInForm = new FormGroup({

    firstName:new FormControl(''),
    lastName:new FormControl(''),
    gender :new FormControl('',[Validators.nullValidator]),
    email : new FormControl('', [Validators.email]),
    phoneNumber: new FormControl('',Validators.pattern('^[6-9]{1}[0-9]{9}$')),
    password: new FormControl('',Validators.pattern('^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$')),
    confirmPassword :new FormControl('',),
  },
  )

  constructor(private _location: Location,private formBuilder: FormBuilder, private service:AppService) {
    if (this.password==this.confirmPassword) {
      this.match=true;
    }
  }
  ngOnInit(): void {
    //this.createForm();
    this.item=this.service.getData() ;
    console.log(this.item)
   }

  backClicked() {
    this._location.back();
  }  
  
  onSubmit(data: { firstName: any; }) {
    console.log(data.firstName);
   }
   
   /*password1(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }*/

    

}

