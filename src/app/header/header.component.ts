import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  separatorImages = Array(45).fill('assets/tortilla_separator1.png'); // Replace with your image path
  separatorImages2 = Array(45).fill('assets/tortilla_separator2.png'); // Replace with your image path
  alternatingImages = this.separatorImages
  .map((item, index) => [item, this.separatorImages2[index]])
  .reduce((acc, val) => acc.concat(val), []);
  constructor() { }


}
