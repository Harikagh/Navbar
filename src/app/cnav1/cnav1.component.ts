import { Component, OnInit } from '@angular/core';
declare function scroll(): any; 
@Component({
  selector: 'app-cnav1',
  templateUrl: './cnav1.component.html',
  styleUrls: ['./cnav1.component.css']
})
export class Cnav1Component implements OnInit {

  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() { }

  ngOnInit() {
     scroll();
  }

}
