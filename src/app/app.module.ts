import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireModule } from "angularfire2";

import { UserService } from "./services/user.service";

import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UserAddComponent } from './component/user-add/user-add.component';
import { FormsModule } from '@angular/forms';
import { materialize } from "materialize-css";
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    UserAddComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Laboratorio2'),
    AngularFirestoreModule,
    FormsModule,
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
