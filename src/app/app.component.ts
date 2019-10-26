import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Pokemon';

  constructor(public router: Router){

  }
  goTo(path){
    this.router.navigate([path]);
  }
}
