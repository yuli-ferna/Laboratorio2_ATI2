import { Component, OnInit } from '@angular/core';
import { userInterface } from "../../models/userInterface";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : userInterface[];
  constructor(private userService: UserService) { 

  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users=>{
      console.log(users);      
    })
  }

}
