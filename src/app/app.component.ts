import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show: Boolean = false
  
  constructor(private Http: HttpClient) {
  }
  showProduct() {
    if (this.show) {
      this.show = false;
      return;
    }
    this.show = true;
  }
}
