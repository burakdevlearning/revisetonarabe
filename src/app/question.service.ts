import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from './question';
import { Questions } from './data';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor() {}

  getQuestions(): Observable<Question[]> {
    const questions = of(Questions);
    return questions;
  }
}
