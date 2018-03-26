import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'staff-slider',
  templateUrl: './staff-slider.component.html',
  styleUrls: ['./staff-slider.component.scss']
})
export class StaffSliderComponent implements OnInit {
 	items  = [];
  constructor() { 
  	this.items = [
{ name: 'Oussama Keddar', job: 'Full-stack Developer', body: 'Oussama is a very skilled. He used to work for no one. He puts passion in every project and creates amazing interfaces', avatar: '/assets/oussama.png'  },
{ name: 'Oussama Keddar', job: 'Full-stack Developer', body: 'Oussama is a very skilled. He used to work for no one. He puts passion in every project and creates amazing interfaces', avatar: '/assets/oussama.png'  },
{ name: 'Oussama Keddar', job: 'Full-stack Developer', body: 'Oussama is a very skilled. He used to work for no one. He puts passion in every project and creates amazing interfaces', avatar: '/assets/oussama.png'  },
  	];
  }

  ngOnInit() {
  	// console.log(this.items);
  }

}
