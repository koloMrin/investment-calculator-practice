import { Component, inject, Input } from '@angular/core';
import { AnnualDataService } from './annual-data.service';
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
  @Input() annualData: AnnualData[] | undefined;
  columnNames = [
    'Year',
    'Investment Value',
    'Interest(Year)',
    'Total Interest',
    'Invested Capital',
  ];
}
