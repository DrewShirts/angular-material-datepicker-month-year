import { Component } from '@angular/core';
import { DateTime } from 'luxon';
import { FormControl } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

import { MaterialDateService } from '../material-date.service';

@Component({
  selector: 'luxon-datepicker',
  templateUrl: './luxon-datepicker.component.html',
  styleUrls: ['./luxon-datepicker.component.scss'],
  providers: [{provide: MAT_DATE_FORMATS, useValue: MaterialDateService.MONTH_YEAR_FORMATS}]
})
export class LuxonDatepickerComponent {

  // Adding the `DateTime.utc()` instantiates the form with a value of today's month and year
  // If it is simply used as `new FormControl()`, it starts with no value
  date = new FormControl(DateTime.utc());
  date2 = new FormControl(DateTime.utc().plus({months: +1}));

  constructor() { }

  // Adding a formControl argument allows you to use this on multiple luxon datepickers in the same form
  setMonthAndYear(normalizedMonthAndYear: DateTime, datepicker: MatDatepicker<any>, formControl: FormControl) {
    console.log('setMonthAndYear', normalizedMonthAndYear);
    formControl.setValue(normalizedMonthAndYear);
    datepicker.close();
  }
}
