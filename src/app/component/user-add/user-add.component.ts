import { Component, OnInit } from '@angular/core';
import { userInterface } from 'src/app/models/userInterface';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user: userInterface = {
    name: '',
    alterEgo: '',
    email: '',
    phone: '',
    birthday: '',
    listPos: 0,
    heroPhrase:''
  }
  constructor() { }

  ngOnInit() {
  }

  saveHero(form: NgForm){

  }

}
