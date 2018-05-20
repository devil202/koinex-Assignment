import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  mobile = false;
  desktop = true;
  dropdown = {company: false, info: false, resource: false, market: false};
  ngOnInit() {
    if ( window.screen.availWidth <= 769) {
      this.mobile = true;
      this.desktop = false;
    }
  }
  show(which) {
    if ( which === 'company') {
      if (this.dropdown.company) {this.dropdown.company = false; } else {
         this.dropdown.company = true; }
      this.dropdown.info = false;
      this.dropdown.resource = false;
      this.dropdown.market = false;
    } else if (which === 'info') {
      if (this.dropdown.info) { this.dropdown.info = false; } else {
        this.dropdown.info = true;
      }
      this.dropdown.company = false;
      this.dropdown.resource = false;
      this.dropdown.market = false;
    } else if (which === 'market') {
      if (this.dropdown.market) { this.dropdown.market = false; } else {
        this.dropdown.market = true;
      }
      this.dropdown.company = false;
      this.dropdown.resource = false;
      this.dropdown.info = false;
    } else {
      if (this.dropdown.resource) { this.dropdown.resource = false; } else {
        this.dropdown.resource = true;
      }
      this.dropdown.company = false;
      this.dropdown.info = false;
      this.dropdown.market = false;
    }
  }

}
