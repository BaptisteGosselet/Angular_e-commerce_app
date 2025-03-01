import { Injectable, signal } from "@angular/core";
import { HEADER_TEXT } from "../../../app/app.constants";

@Injectable()
export class HeadbandStore {
    #text = signal<string>('');
    readonly text = this.#text.asReadonly;


    init(){
      this.#text.set(HEADER_TEXT);
    }
  
}