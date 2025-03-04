import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'insiders-product-recomendation';
  stage = 'start';
  questions = [
    { title: 'BANKING AND INSURANCE', question: 'Would you benefit from AI-driven document processing?', options: ['Yes', 'May be', 'No'] },
    { title: 'MOBILE E-HEALTH SOLUTIONS', question: 'Are mobile document capture solutions relevant to you?', options: ['Yes', 'May be', 'No'] },
    { title: 'E-INVOICE MANAGEMENT', question: 'Do you need automated invoice management?', options: ['Yes', 'May be', 'No'] },
    { title: 'PURCHASE TO PAY AUTOMATION', question: 'Are you looking for purchase-to-pay automation?', options: ['Yes', 'May be', 'No'] }
  ];
  currentQuestionIndex = 0;
  answers: string[] = [];
  recommendedProduct = '';

  startQuiz() {
    this.stage = 'quiz';
  }

  selectAnswer(answer: string) {
    this.answers.push(answer);
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.calculateResult();
      this.stage = 'result';
    }
  }

  calculateResult() {
    this.recommendedProduct = this.answers.includes('Yes') ? 'Mobile E-Health Solutions' : 'Purchase-to-Pay Automation';
  }

  restartQuiz() {
    this.stage = 'start';
    this.currentQuestionIndex = 0;
    this.answers = [];
  }
}
