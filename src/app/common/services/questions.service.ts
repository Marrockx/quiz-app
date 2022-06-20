import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class QuestionsService {


  constructor() { }

  getRandom() {
    return Math.floor((Math.random() * 100) + 1);
  }
}

