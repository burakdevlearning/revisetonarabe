import { Component } from '@angular/core';
import { VocabularyService } from '../vocabulary.service';
import { Vocubulary } from '../vocabulary';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  vocabularies: Vocubulary[] = [];
  constructor(private vocabularyService: VocabularyService) {}

  getVocabularies(): void {
    this.vocabularyService
      .getVocubularies()
      .subscribe((values) => (this.vocabularies = values));
  }

  ngOnInit(): void {
    this.getVocabularies();
  }
}
