import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero-birthday1',
  templateUrl: './hero-birthday1.component.html',
  styleUrls: ['./hero-birthday1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroBirthday1Component implements OnInit {
  birthday = new Date(1988, 3, 15); // April 15, 1988
  nameOfKid = 'Thomas Grey';
  toggle = true; // start with true == shortDate


  constructor() { }

  ngOnInit() {
  }

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  
  toggleFormat() { this.toggle = !this.toggle; }

}
