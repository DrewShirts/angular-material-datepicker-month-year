import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_LUXON_DATE_ADAPTER_OPTIONS, MatLuxonDateModule } from '@angular/material-luxon-adapter';

import { AppComponent } from './app.component';
import { MaterialDateService } from './material-date.service';
import { DatepickerViewsSelectionExampleComponent } from './datepicker-views-selection-example/datepicker-views-selection-example.component';
import { LuxonDatepickerComponent } from './luxon-datepicker/luxon-datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerViewsSelectionExampleComponent,
    LuxonDatepickerComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatLuxonDateModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: MAT_LUXON_DATE_ADAPTER_OPTIONS,
      useValue: {useUtc: true}
    },
    MaterialDateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
