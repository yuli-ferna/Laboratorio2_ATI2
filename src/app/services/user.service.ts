import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { userInterface } from "../models/userInterface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    userCollection: AngularFirestoreCollection<userInterface>;
    users: Observable<userInterface[]>;
    userDoc: AngularFirestoreDocument<userInterface>;

    constructor(public fs: AngularFirestore) {
        // this.users = fs.collection('users').valueChanges();
        this.userCollection = fs.collection<userInterface>('users');
        this.users = this.userCollection.snapshotChanges().pipe(
            map(actions=> actions.map(a => {
                const data = a.payload.doc.data() as userInterface;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        )
    }

    getHeros(){
        console.log(this.users);
        
        return this.users;
    }

    addHeros(hero :userInterface){
        const id = this.fs.createId();
        return new Promise<userInterface>((resolve, reject)=>{
            var newUserRef = this.fs.collection("users").doc(id)
            .set(hero).then(function() {
                console.log("Hero added!");
                resolve(hero);
            }).catch(err =>{
                console.log(err);
                reject();
            });

        })
    }
    
    deleteHeros(hero :userInterface, id){
        return new Promise<userInterface>((resolve, reject)=>{
            var userRef = this.fs.collection("users").doc(id)
            .delete().then(function() {
                console.log("Hero deleted!");
                resolve();
            }).catch(err =>{
                console.log(err);
                reject();
            });
        });
    }
    
    updateHeros(hero :userInterface, id){
        return new Promise<userInterface>((resolve, reject)=>{
            var userRef = this.fs.collection("users").doc(id)
            .update(hero).then(function() {
                console.log("Hero updated!");  
                resolve(hero);
            }).catch(err =>{
                console.log(err);
                reject();
                
            });
        });
    }
    
}
