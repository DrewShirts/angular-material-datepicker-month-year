import { Injectable } from '@angular/core';
import { MatDateFormats } from '@angular/material/core/datetime/date-formats';

@Injectable({
  providedIn: 'root'
})
export class MaterialDateService {
  static DATE_FORMATS: MatDateFormats = {
    parse: {
      dateInput: 'dd LLL yyyy',
    },
    display: {
      dateInput: 'dd LLL yyyy',
      monthYearLabel: 'LLL yyyy',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'LLL yyyy',
    },
  };

  static MONTH_YEAR_FORMATS: MatDateFormats = {
    parse: {
      dateInput: 'LL/yyyy',
    },
    display: {
      dateInput: 'LLL yyyy',
      monthYearLabel: 'LLL yyyy',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'LLL yyyy',
    },
  };

  constructor() { }
}
