import { Component, ViewEncapsulation } from '@angular/core';
import { Actions } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.view.html',
  styleUrls: ['./app.view.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppView {

  constructor(private actions: Actions) {
    // actions.subscribe(action => {
    //   console.log('action', action);
    // });
  }
}
