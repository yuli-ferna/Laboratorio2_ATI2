import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { userInterface } from "../models/userInterface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
    userCollection: AngularFirestoreCollection<userInterface>;
    users: Observable<userInterface[]>;
    userDoc: AngularFirestoreDocument<userInterface>;

    constructor(public fs: AngularFirestore) {
        this.users = fs.collection('users').valueChanges();
    }

    getHeros(){
        return this.users;
    }

    addHeros(hero :userInterface){
        console.log("saiko no hero"); 
    }
    
    deleteHeros(){
        console.log("saiko no hero"); 
    }
    
    updateHeros(hero :userInterface){
        console.log("saiko no hero"); 
    }
    
}
