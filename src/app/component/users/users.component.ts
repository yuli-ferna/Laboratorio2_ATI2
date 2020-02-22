import { Component, OnInit } from '@angular/core';
import { userInterface } from "../../models/userInterface";
import { UserService } from "../../services/user.service";
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : userInterface[];
  columnsToDisplay : string[];
  myRowData : string[];
  editMode : boolean;
  currentEditId : string;
  
  constructor(private userService: UserService) 
  {   
    this.columnsToDisplay=["Name", "AlterEgo"];
    this.editMode = false;
    this.currentEditId = '';

  }

  ngOnInit() {
    this.userService.getHeros().subscribe(users=>{
      console.log(users);
      this.users = users;      
    })
  }
  updateHero(form: NgForm, user)
  {
    if (form.valid) {
      console.log(user);
      
      this.userService.updateHeros(user, user.id).then(()=>{
        console.log('Hero updated!');
        this.editMode = false;
      }).catch((err)=>{
        console.log(err);
        
      });
    } else {
      console.log('No se puede');
      
    }
  }

  editModeOn(event, user){
    this.editMode = true;
    this.currentEditId = user.id;
  }

  editModeOff(event, user){
    this.editMode = false;
  }

  deleteHero(event, user){

    this.userService.deleteHeros(user, user.id).then(()=>{
      console.log('Hero deleted!');
      
    }).catch((err)=>{
      console.log(err);
      
    });
  }
}
