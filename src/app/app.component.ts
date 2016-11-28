import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    require.ensure([], require => {
      let r = './app.component';
      let ctx = require(r);

      console.log(ctx);
    });
  }
}
