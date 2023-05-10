import { Component } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
})
export class QuizzComponent {
  questions: Question[] = [];

  constructor(private questionService: QuestionService) {}

  getQuestions(): void {
    this.questionService
      .getQuestions()
      .subscribe((values) => (this.questions = values));
  }

  getAnswer(
    event: any,
    correctAnswerId: number,
    answerId: number,
    questionId: number
  ): void {
    const answersDiv = document.querySelectorAll('.question_' + questionId);
    answersDiv.forEach((element) => {
      element.classList.remove('bg-correct');
      element.classList.remove('bg-incorrect');
    });
    if (answerId == correctAnswerId) {
      event.target.classList.add('bg-correct');
    } else {
      event.target.classList.add('bg-incorrect');
    }
  }

  ngOnInit(): void {
    this.getQuestions();
  }
}
