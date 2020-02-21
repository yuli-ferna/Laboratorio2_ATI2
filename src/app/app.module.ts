import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
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

import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function HttpLoaderfactory(http,HttpClient) {

  return new TranslateHttpLoader(http,'/assets/i18n/','.json');

}

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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide : TranslateLoader,
        useFactory : HttpLoaderfactory,
        deps : [HttpClient]
      }
    })
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
