import { Component, EventEmitter, Output } from '@angular/core';
import { type InvestmentInput } from '../investment-results/investment-input.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() userInput = new EventEmitter<InvestmentInput>();
  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;

  onCalculate() {
    this.userInput.emit({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    });
  }
}
