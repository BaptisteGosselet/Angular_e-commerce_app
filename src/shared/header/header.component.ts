import { Component, inject } from '@angular/core';
import { HeadbandComponent } from "./headband/headband.component";
import { HeaderStore } from './header.store';

@Component({
  selector: 'app-header',
  imports: [HeadbandComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [HeaderStore]
})
export class HeaderComponent {
  #headerStore = inject(HeaderStore);
  catalogLinks = this.#headerStore.catalogLinks();
  userLinks = this.#headerStore.userLinks();

}
