import { Component, OnInit } from '@angular/core';
import { userInterface } from 'src/app/models/userInterface';

import { NgForm } from '@angular/forms/src/directives/ng_form';
import { UserService } from 'src/app/services/user.service';

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
  registerForm: any;
  minDate: Date = new Date (2000, 1, 1);
  constructor(private userServ : UserService) { 
    
    let a =userServ.getHeros();
   
  }

  ngOnInit() {
  }

  saveHero(form: NgForm){
    
    if (form.valid){
      console.log(this.user);
      this.userServ.addHeros(this.user).then(()=>{
        console.log('ready!');
        this.user = {
          name: '',
          alterEgo: '',
          email: '',
          phone: '',
          birthday: '',
          listPos: 0,
          heroPhrase:''
        };
      }).catch((err)=>{
        console.log(err);
        
      })
    }else{
      console.log('No se puede');
      
    }
  }

}
