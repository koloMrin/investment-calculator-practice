import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentInput } from './investment-results/investment-input.model';
import { AnnualData } from './investment-results/annual-data.model';
import { AnnualDataService } from './investment-results/annual-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  annualData: AnnualData[] | undefined;
  annualDataService = inject(AnnualDataService);

  onCalculationRequested(investmentInput: InvestmentInput) {
    this.annualData =
      this.annualDataService.calculateInvestmentResults(investmentInput);
  }
}
