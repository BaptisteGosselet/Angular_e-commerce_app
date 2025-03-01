import { Injectable, signal } from "@angular/core";

@Injectable()
export class HeadbandStore {
    #text = signal<string>('');
    readonly text = this.#text.asReadonly;


    init(){
      this.#text.set('Hello World');
    }
  
}