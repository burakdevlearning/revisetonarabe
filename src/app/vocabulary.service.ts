import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vocubulary } from './vocabulary';
import { Words } from './data';

@Injectable({
  providedIn: 'root',
})
export class VocabularyService {
  constructor() {}

  getVocubularies(): Observable<Vocubulary[]> {
    const words = of(Words);
    return words;
  }
}
