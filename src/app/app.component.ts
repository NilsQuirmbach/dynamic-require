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
      // this string needs to be dynamic, since I know only at runtime which module I have to load
      let r = './app.component';

      let ctx = require(r);

      console.log(ctx);
    });
  }
}
