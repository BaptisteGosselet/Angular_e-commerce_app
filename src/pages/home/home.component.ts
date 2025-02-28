import { Component, inject } from '@angular/core';
import { HomeStore } from './home.store';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [HomeStore]
})
export class HomeComponent {
  #homeStore:HomeStore = inject(HomeStore);

  constructor() {
    this.#homeStore.init();
  }


}
