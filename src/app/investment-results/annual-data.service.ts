import { type InvestmentInput } from './investment-input.model';
import { type AnnualData } from './annual-data.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnnualDataService {
  calculateInvestmentResults(investmentInput: InvestmentInput) {
    const annualData: AnnualData[] = [];
    let investmentValue = investmentInput.initialInvestment;

    for (let i = 0; i < investmentInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (investmentInput.expectedReturn / 100);
      investmentValue +=
        interestEarnedInYear + investmentInput.annualInvestment;
      const totalInterest =
        investmentValue -
        investmentInput.annualInvestment * year -
        investmentInput.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investmentInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          investmentInput.initialInvestment +
          investmentInput.annualInvestment * year,
      });
    }

    return annualData;
  }
}
