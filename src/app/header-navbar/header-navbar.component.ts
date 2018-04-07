import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent implements OnInit {
	private toggle : boolean = false;
  constructor() { }

  ngOnInit() {
  }
   showAsideMenu(event){
       this.toggle = true;
    }
    hideAsideMenu() {
    	this.toggle = false;
    }

}
