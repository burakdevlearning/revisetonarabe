import { Answer } from './answer';

export interface Question {
  id: number;
  question_text: string;
  answers: Answer[];
  correctAnswerId: number;
}
