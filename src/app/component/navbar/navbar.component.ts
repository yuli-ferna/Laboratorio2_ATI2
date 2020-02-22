import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public translate: TranslateService) { 

    this.translate.addLangs(['es','en']);
    this.translate.setDefaultLang('en');

  }

  ngOnInit() {

    let _this = this;

    document.addEventListener('DOMContentLoaded', function() {
      let elems = document.querySelectorAll('.dropdown-trigger');
      var option={}
      // let instances = M.Dropdown.init(elems, option);
    });
    
    document.getElementById('SpainLang').addEventListener('click', function(){

      _this.translate.use('es')

    });

    document.getElementById('EnglishLang').addEventListener('click', function(){

      _this.translate.use('en')

    });
  }

}
