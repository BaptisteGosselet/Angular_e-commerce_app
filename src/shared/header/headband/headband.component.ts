import { Component, computed, inject } from '@angular/core';
import { HeadbandStore } from './headband.store';

@Component({
  selector: 'app-headband',
  imports: [],
  templateUrl: './headband.component.html',
  styleUrl: './headband.component.scss',
  providers: [HeadbandStore]
})
export class HeadbandComponent {
  #headbandStore = inject(HeadbandStore);

  text = this.#headbandStore.text();
  displayText = computed(() => this.text() + '');

  constructor() {
    this.#headbandStore.init();
  }

}
