import { Component, inject, Input } from '@angular/core';
import { InvestmentService } from './investment.service';
import { AnnualData } from './annual-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  columnNames = [
    'Year',
    'Investment Value',
    'Interest(Year)',
    'Total Interest',
    'Invested Capital',
  ];

  investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.results;
  }
}
