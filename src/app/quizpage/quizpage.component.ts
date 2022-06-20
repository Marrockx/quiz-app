import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { QuestionsService } from '../common/services/questions.service';

@Component({
  selector: 'app-quizpage',
  templateUrl: './quizpage.component.html',
  styleUrls: ['./quizpage.component.scss']
})
export class QuizpageComponent implements OnInit {
  firstNum: number = 5;
  secondNum: number = 7;

  public quizAnswer !: FormGroup;

  scoreCorrect: number = 0;
  scoreIncorrect: number = 0;

  constructor(private questionsService: QuestionsService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.quizAnswer = new FormGroup({
      answer: new FormControl('', [Validators.required, Validators.pattern(/d*/)]),
    })
  }

  checkAnswer(first: number, second: number, result: any) {
    if (first + second == Number(result)) {
      this.scoreCorrect++;
      this.toast.success({ detail: "CORRECT", summary: 'Yay! You got that right!', position: 'br', duration: 2000 });

    } else {
      this.scoreIncorrect++;
      this.toast.error({ detail: "Fail", summary: 'Wrong Answer!', position: 'br', duration: 2000 });
    }

    this.quizAnswer.reset();

    this.firstNum = this.questionsService.getRandom();
    this.secondNum = this.questionsService.getRandom();
  }

}
