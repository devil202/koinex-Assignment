import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  mobile = false;
  desktop = true;
  ngOnInit() {
    if (window.screen.availWidth <= 768) {
      this.mobile = true;
      this.desktop = false;
    }
  }
}
